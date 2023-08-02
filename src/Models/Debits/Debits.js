const mongoose = require('mongoose')
const details = require('../Details/Details')


const debitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },

    color: {
        type: String,
        required: true
    },
    
    debits: { 
        type: [details],
        required: true
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('Debit', debitSchema)