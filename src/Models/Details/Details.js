const mongoose = require('mongoose')

const Detail = {
    name: String,
    color: String,
    value: Number,
    parcel: { initial: Number, final: Number},
    tag: { name: String, color: String }
}

module.exports = Detail