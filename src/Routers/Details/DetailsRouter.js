const { Router } = require('express')
const router = Router()
const DebitsController = require('../../Controllers/Debits/DebitsController')
const DetailConstroller = require('../../Controllers/Details/detailsController')

const debitController = new DebitsController()
const controller = new DetailConstroller()

router.get("/:id", debitController.getDebit, controller.all)
router.get("/:id", debitController.getDebit, controller.get)
router.post("/:id", debitController.getDebit, controller.create)
router.delete("/:id", debitController.getDebit, controller.delete)

module.exports = router
