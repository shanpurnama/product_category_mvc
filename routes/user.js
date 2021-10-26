const express = require('express')
const { create } = require('../controllers/productController')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.post('/register', userController.create)
router.post('/login', userController.login)
module.exports = router