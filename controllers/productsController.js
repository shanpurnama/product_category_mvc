const productsCategoriesDB = require('../models/productCategory')

function getAll (req, res) {
    productsCategoriesDB.query('SELECT products.product_name, categories.category_name FROM products, categories, products_categories WHERE products_categories.product_id = products.id AND products_categories.category_id = categories.id' , function(err, data){
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })

    // productsCategoriesDB.query('SELECT * FROM products', function(err, data){
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.send(data)
    //     }
    // })
}

function create(req, res) {
    const dataProducts = {
        product_name: req.body.product_name,
        price: req.body.price
    }
    productsCategoriesDB.query('INSERT INTO products SET ?', dataProducts, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.send('success add new product')
        }
    })
}

function updateProduct(req, res) {
    const sql = `UPDATE products SET product_name = '${req.body.product_name}', price = '${req.body.price}' WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.send('success update new products')
        }
    })
}

function remove(req, res) {
    productsCategoriesDB.query(`DELETE FROM products WHERE id = ${req.params.id}`, function(err){
        if (err) {
            console.log(err)
        } else {
            res.send('success delete')
        }
    })

}

function getProductsAndCategories(req, res) {
    console.log('masuk')
    console.log(req.params.id)

}



module.exports = {
    getAll,
    create,
    updateProduct,
    remove,
    getProductsAndCategories
}



//pertama cari category by name req.params.name 