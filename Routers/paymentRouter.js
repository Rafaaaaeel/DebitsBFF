const { Router } = require('express')
const router = Router()
const model = require('../Models/payment')
const PaymentController = require('../Controllers/paymentController')

const controller = new PaymentController()

router.get("/", controller.getDebits)
router.get("/:id", controller.getDebit)
router.post("/", controller.createDebit)

module.exports = router