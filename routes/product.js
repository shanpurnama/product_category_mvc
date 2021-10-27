const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const verify = require('../middelwares/middleware')
// const verify = require('jsonwebtoken/')

router.get('/', productController.getAll)
router.post('/', verify.autenticated, productController.create)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.remove)


module.exports = router
