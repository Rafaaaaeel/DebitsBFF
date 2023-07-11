const mongoose = require('mongoose')

const Debit = {
    name: String,
    color: String,
    value: Number,
    parcel: { initial: Number, final: Number},
    tag: { name: String, color: String }
}

const debitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    debit: {
        type: [Debit],
        required: true
    }
})

module.exports = mongoose.model('Debit', debitSchema)