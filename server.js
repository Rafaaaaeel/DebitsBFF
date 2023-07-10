require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./Routers')
const PORT = 3000
const db = mongoose.connection

mongoose.connect(process.env.DATA_URL, { useNewUrlParser: true } )

db.on("error", (error) => { console.error(error) })
db.on("open",  () => { console.log("Connected to database") })

app.use(express.json())
app.use(router)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
