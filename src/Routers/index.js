const { Router } = require('express')
const debitsRouter = require('./Debits/DebitsRouter')
const detailRouter = require('./Details/DetailsRouter')

const router = Router() 

router.use("/debits", debitsRouter)
router.use("/debits/detail", detailRouter)

module.exports = router