const model = require('../../Models/Debits/Debits')
const detailModel = require('../../Models/Details/Details')

class DebitsController {
    
    async all(request, response) {
        try {
            
            const debits = await model.find()
            
            response.json( { data: debits  } )

        } catch (error) {
            response.status(500)
        }
    }

    async debit(request, response) {
        response.json(response.debit)
    }

    async update(request, response) {
        try {
            const debit = response.debit.debit
            const debitUpdated = await debit.save()
            response.json(debitUpdated)
        } catch (error) {
            response.status(500)
        }
    } 
    
    async append(request, response) {
        try {

            const bill = {
                parcel: request.body.parecel,
                tag: request.body.tag,
                name: request.body.name,
                color: request.body.color,
                value: request.body.value
            }
    
            const debit = response.debit.debit
        
            debit.debit.push(bill)

            const newDebit = await debit.save()

            response.json({created: newDebit})
        } catch (error) {
            response.status(500)
        }
       
    }

    async create(request, response) {

        const debit = new model( {
            user: request.body.user,
            name: request.body.name,
            description: request.body.description,
            color: request.body.color,
            debits: []
        })

        try {
            const newDebit = await debit.save()
            response.status(201).json(newDebit)
        } catch (error) {
            return response.status(500)
        }
    }

    async delete(request, response, next) {
        const debit = response.debit.debit
            
        const name = debit.name
        
        const saved = await debit.deleteOne({name: name})

        next()
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
                response.status(404).json({message: "Not found"})
                return
            }

            response.debit = { debit: debit }
    
            next()
        } catch (error) {
            response.status(500)
        }
       
    }

}

module.exports = DebitsController