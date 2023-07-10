const model = require('../Models/payment')

class PaymentController {
    
    async all(request, response) {
        try {
            const debits = await model.find()
            response.json(debits)
        } catch (error) {
            response.status(500)
        }
    }

    async debit(request, response) {
        response.json(response.debit)
    }

    async update(request, response) {
        try {
            const debit = response.debit
            const debitUpdated = await debit.save()
            response.json(debitUpdated)
        } catch (error) {
            response.status(500)
        }
    } 
    
    async create(request, response) {
        
        const debit = new model( {
            user: request.body.user,
            name: request.body.name,
            description: request.body.description,
            debit: request.body.debit
        })

        try {
            const newDebit = await debit.save()
            response.status(201).json(newDebit)
        } catch (error) {
            return response.status(500)
        }
    }

    async delete(request, response) {
        try {
            const debit = response.debit
            const name = debit.name
            await model.deleteOne({name: name})
            response.status(200).json({message: `${name} was deleted`})
        } catch (error) {
            response.status(500)
        }
    }

    async deleteAll(request, response) {
        try {
            await model.deleteMany();
            response.status(200).json( {message: "Delete"} )
        } catch (error) {
            response.status(500)
        }
    }

    async getDebit(request, response, next) {
        try {
            const debit = await model.findOne({ _id: request.params.id })

            if (debit == null) {
                console.log("null")
                response.status(404).json({message: "Not found"})
                return
            }

            response.debit = debit
    
            next()
        } catch (error) {
            response.status(500)
        }
       
    }

}

module.exports = PaymentController