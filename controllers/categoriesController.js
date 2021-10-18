const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid');
// uuidv4()

function getAll(req, res) {
    productsCategoriesDB.query('SELECT * FROM categories', function(err, category) {
        if (err) {
            console.log(err)
        } else {
            res.send(category)
        }
    })
}


function create(req, res) {
    const uuid = uuidv4()
    const data = {
        category_id: uuid,
        category_name: req.body.category_name
    }
    productsCategoriesDB.query('INSERT INTO categories SET ?', data, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.send('succes add new category')
        }
    })
}

function update(req, res) {
    const sql = `UPDATE categories SET category_name = '${req.body.category_name}' WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.send('succes update')
        }
    })
}

function remove(req, res) {
    const sql =  `DELETE FROM categories WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            console.log(err)
        } else {
            res.send('succesfully delete')
        }
    })
}

module.exports = {
    getAll,
    create,
    update,
    remove
}