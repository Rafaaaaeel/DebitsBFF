require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./Routers')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATA_URL, { useNewUrlParser: true } )

const db = mongoose.connection
db.on("error", (error) => { console.error(error) })
db.on("open",  () => { console.log("Connected to database") })

app.use(express.json())
app.use(router)

const PORT = 3000
console.log(PORT)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
