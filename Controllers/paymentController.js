
// TODO: 
// Get all 
// Get one
// create 
// delete 
// Update

class PaymentController {

    // Get all 
    // Get one
    // create 
    // delete 
    // Update


    async allDebits(request, response) {
        try {
            return response.json({message: "test"})
        } catch (error) {
            return response.status(500)
        }
    }
}

module.exports = PaymentController