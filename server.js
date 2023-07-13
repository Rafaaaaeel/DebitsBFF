require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./src/Routers')
const db = mongoose.connection

mongoose.connect(process.env.DATA_URL, { useNewUrlParser: true } )

db.on("error", (error) => { console.error(error) })
db.on("open",  () => { console.log(`Connected to database ${process.env.DATA_URL}`) })

app.use(express.json())
app.use(router)
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
