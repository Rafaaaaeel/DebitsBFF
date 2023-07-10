const { Router } = require('express')
const router = Router()
const PaymentController = require('../Controllers/paymentController')

const controller = new PaymentController()

router.get("/", controller.all)
router.get("/:id", controller.getDebit ,controller.debit)
router.post("/", controller.create)
router.delete("/", controller.delete)
router.patch("/:id", controller.getDebit, controller.update)

module.exports = router