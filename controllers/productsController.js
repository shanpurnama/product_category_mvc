const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid');



// SELECT 
//     products.product_name AS 'product',
//     categories.category_name AS 'category',
//     products.price
// FROM
//     products,
//     categories,
//     products_categories
// WHERE
// 	products_categories.product_id = products.product_id
// AND
// 	products_categories.category_id = categories.category_id

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
            console.log(err)
        } else {
            res.send(data)
        }
    })
}

    // productsCategoriesDB.query('SELECT * FROM products', function(err, data){
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.send(data)
    //     }
    // })

function create(req, res) {
    var uuid = uuidv4()
    const dataProducts = {
        id: uuid,
        product_name: req.body.product_name,
        price: req.body.price
    }
    productsCategoriesDB.query('INSERT INTO products SET ?', dataProducts, function(err) {
        if (err) {
            console.log(err)
        } else {
            var data = {
                id: uuidv4(),
                product_id: dataProducts.id,
                category_id: req.body.category_id
            }
            productsCategoriesDB.query('INSERT INTO products_categories SET ?', data, function(err) {
                if (err) {
                    console.log(err)
                } else {
                     res.send('success add new product')
                }
            })
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
    // console.log(req.params.id)
    var sql = `DELETE FROMproducts WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err){
        if (err) {
            console.log(err)
        } else {
            res.send('success delete one product')
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