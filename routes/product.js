const express = require('express')
const router = express.Router()
const controllersProducts = require('../controllers/productsController')

router.get('/', controllersProducts.getAll)
router.post('/',controllersProducts.create)
router.put('/:id', controllersProducts.updateProduct)
router.delete('/:id', controllersProducts.remove)


module.exports = router
