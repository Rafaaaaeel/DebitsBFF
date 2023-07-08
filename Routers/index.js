const { Router } = require('express')
const paymentsRouter = require('./paymentRouter')
const router = Router() 

router.use("/debits", paymentsRouter)

module.exports = router