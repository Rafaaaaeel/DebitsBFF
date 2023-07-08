const mongoose = require('mongoose')

const debitSchema = new mongoose.Schema({
    
    name: {
        type :String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false,
        default: 5
    },
    flavour: {
        type: String,
        required: true
    },
    avalible: {
        type: Boolean,
        required: true
    },

})

module.exports = mongoose.model('Debit', debitSchema)
