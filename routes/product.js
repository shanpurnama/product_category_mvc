const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.getAll)
router.post('/',productController.create)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.remove)


module.exports = router
