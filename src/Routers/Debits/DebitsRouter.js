const { Router } = require('express')
const router = Router()
const DebitsController = require('../../Controllers/Debits/DebitsController')

const controller = new DebitsController()

router.get("/", controller.all)
router.post("/", controller.create)
router.get("/:id", controller.getDebit, controller.debit)
router.delete("/all", controller.deleteAll)
router.delete("/:id", controller.getDebit, controller.delete)
router.patch("/:id", controller.getDebit, controller.update)

module.exports = router