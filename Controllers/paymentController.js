const model = require('../Models/payment')

// TODO: 
// Get all 
// Get one
// create 
// delete 
// Update

class PaymentController {
    'use strict'

    // Get all 
    async all(request, response) {
        try {
            const debits = await model.find()
            response.json(debits)
        } catch (error) {
            response.status(500)
        }
    }

    // Get one
    async debit(request, response) {
        response.json(response.debit)
    }

    async update(request, response) {
        try {
            const debit = response.debit
            // debit.name = "teste update------1"
            const newDebit = await debit.save()
            response.json(newDebit)
        } catch (error) {

        }
    } 

    async getDebit(request, response, next) {
        try {
            const debit = await model.findOne({ _id: request.params.id })

            if (debit == null) {
                response.status(404)
                return
            }

            response.debit = debit
    
            next()
        } catch (error) {
            response.status(500)
        }
       
    }
    // async debit(request, response) {

    // }

    // Update
    
    // create 
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

    // delete 
    async delete(request, response) {
        try {
            await model.deleteMany();
            response.status(200).json( {message: "Delete"} )
        } catch (error) {

        }
    }

}

module.exports = PaymentController