const { Router } = require('express')
const router = Router()
const DebitsController = require('../../Controllers/Debits/DebitsController')

const controller = new DebitsController()

router.get("/", controller.all)
router.get("/:id", controller.getDebit, controller.debit)
router.post("/", controller.create)
router.delete("/all", controller.deleteAll)
router.delete("/:id", controller.getDebit, controller.delete)
router.patch("/:id", controller.getDebit, controller.update)
router.post("/add/:id", controller.getDebit, controller.append)
router.delete("/delete/:id", controller.getDebit, controller.pop)

module.exports = router