const model = require('../Models/payment')

// TODO: 
// Get all 
// Get one
// create 
// delete 
// Update

class PaymentController {

    // Get all 
    async getDebits(request, response) {
        try {
            return response.json({message: "test"})
        } catch (error) {
            return response.status(500)
        }
    }

    // Get one
    async getDebit(request, response) {

    }
 
    // delete 
    // Update
    
    // create 
    async createDebit(request, response) {
        
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
}

module.exports = PaymentController