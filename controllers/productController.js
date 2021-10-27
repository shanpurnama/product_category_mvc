const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid');

function getAll (req, res) {
    productsCategoriesDB.query(`
    SELECT
        products.id,
        products.product_name,
        products.price,
        categories.category_name

    FROM 
        products, 
        categories, 
        products_categories 
    WHERE 
        products_categories.product_id = products.id 
    AND 
        products_categories.category_id = categories.id`, function(err, data){
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                data,
                message: 'OK'
            })
        }
    })
}

function create(req, res) {
    var uuid = uuidv4()
    const dataProducts = {
        id: uuid,
        product_name: req.body.product_name,
        price: req.body.price
    }
    productsCategoriesDB.query('INSERT INTO products SET ?', dataProducts, function(err) {
        if (err) {
            res.send(500).json({
                message: 'Internal Server Error'
            })
        } else {
            var data = {
                id: uuidv4(),
                product_id: dataProducts.id,
                category_id: req.body.category_id
            }
            productsCategoriesDB.query('INSERT INTO products_categories SET ?', data, function(err) {
                if (err) {
                    res.status(500).json({
                        message: 'internal server Error'
                    })
                } else {
                    res.status(201).json({
                        message: 'success add new product'
                    })
                }
            })
        }
    })
}

function updateProduct(req, res) {
    const sql = `UPDATE products SET product_name = '${req.body.product_name}', price = '${req.body.price}' WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            res.send(500).json({
                message: 'internal server Error'
            })
        } else {
            res.status(200).json({
                message: 'success update new products'
            })
        }
    })
}

function remove(req, res) {
    var sql = `DELETE FROMproducts WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err){
        if (err) {
            res.send(500).json({
                message: 'internal server Error'
            })
        } else {
            res.status(200).json({
                message: 'success delete one product'
            })
        }
    })
}


module.exports = {
    getAll,
    create,
    updateProduct,
    remove,
}



//pertama cari category by name req.params.name 