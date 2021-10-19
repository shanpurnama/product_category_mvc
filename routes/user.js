const express = require('express')
const { create } = require('../controllers/productsController')
const router = express.Router()
const controllerUser = require('../controllers/userController')

router.get('/', controllerUser.getAll)
router.post('/', controllerUser.create)

module.exports = router