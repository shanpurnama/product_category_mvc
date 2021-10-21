const express = require('express')
const { create } = require('../controllers/productsController')
const router = express.Router()
const controllerUser = require('../controllers/userController')

router.get('/register', controllerUser.getAll)
router.post('/register', controllerUser.create)
router.post('/login', controllerUser.login)
module.exports = router