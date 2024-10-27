const express = require('express')
const { hello } = require('../controllers/helloControler')
const router = express.Router()

router.get('/', hello)
module.exports = router