const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const verify = require('../middlewares/verify')


router.get('/', productController.getAll)
router.get('/getByCategory/:id', productController.getByCategory)
router.post('/', verify.autenticated, productController.create)
router.put('/:id', verify.autenticatedUpdate, productController.updateProduct)
router.delete('/:id', verify.autenticatedDelete, productController.remove)


module.exports = router
