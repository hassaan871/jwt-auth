const express = require('express')
const { login, protectedRoute } = require('../controllers/authController')
const token = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/login', login)
router.post('/user', token, protectedRoute)

module.exports = router