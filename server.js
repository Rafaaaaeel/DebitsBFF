const express = require('express')
const app = express()
const router = require('./Routers')

app.use(express.json())
app.use(router)

const PORT = 3000
console.log(PORT)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
