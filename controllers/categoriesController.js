const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid');

function getAll(req, res) {
    productsCategoriesDB.query('SELECT * FROM categories', function(err, category) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                category,
                message: 'OK'
            })
        }
    })
}


function create(req, res) {
    const uuid = uuidv4()
    const data = {
        id: uuid,
        category_name: req.body.category_name
    }
    productsCategoriesDB.query('INSERT INTO categories SET ?', data, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(201).json({
                message: 'succes add new category'
            })
        }
    })
}

function update(req, res) {
    const sql = `UPDATE categories SET category_name = '${req.body.category_name}' WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                message: 'succes update'
            })
        }
    })
}

function remove(req, res) {
    const sql =  `DELETE FROM categories WHERE id = ${req.params.id}`
    productsCategoriesDB.query(sql, function(err) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            res.status(200).json({
                message: 'succesfully delete',
            })
        }
    })
}

module.exports = {
    getAll,
    create,
    update,
    remove
}