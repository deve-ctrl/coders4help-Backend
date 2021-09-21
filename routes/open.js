const express = require('express')
const router = express.Router()

const openRouter = require('../controllers/open')
router.get("/", openRouter.getIndex)

module.exports = router 