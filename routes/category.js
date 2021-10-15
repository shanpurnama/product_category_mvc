const express = require('express')
const router = express.Router()
const controllerCategories = require('../controllers/categoriesController')

router.get('/', controllerCategories.getAll)
router.post('/', controllerCategories.create)
router.put('/:id', controllerCategories.update)
router.delete('/:id', controllerCategories.remove)

module.exports = router