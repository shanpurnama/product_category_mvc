const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

function getAll(req, res) {
    productsCategoriesDB.query('SELECT * FROM users', function(err, data) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Eror'
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
    bcrypt.hash(req.body.password, 3, function(err, hash) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else {
            var userData = {
                id: uuid,
                email: req.body.email,
                password: hash
            }
            productsCategoriesDB.query('INSERT INTO users SET ?', userData, function(err) {
                if (err) {
                    res.status(500).json({
                        message: 'Internal Server Error'
                    })
                } else {
                    res.status(201).json({
                        message: 'success create a new user'
                    })
                }
            })
        }
    })
}


// cari email yang diinput ada di database ato ngga?*
// kalo ga ada email ? show error*
// kalo ada email ? lanjut ngecek password nya yang diinput sesuai ga*
// kalo password beda ? show error*
// kalo password sama ? berhasil login*

function login(req, res) {
    var dataUser = {
        email : req.body.email
    }
    productsCategoriesDB.query('SELECT * FROM users WHERE ?', dataUser , function(err, data) {
        if (err) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        } else if (data.length === 0) {
            res.status(404).json({
                message : 'wrong password / email'
            })
        } else {
            bcrypt.compare(req.body.password, data[0].password, function(err, result) {
                if (err) {
                    res.status(500).json({
                        message: 'Internal Server Error'
                    })
                } else if (result === false) {
                    res.status(404).json({
                        message: ' wrong password / email'
                    })
                } else {
                    var token = jwt.sign({
                        email: data[0].email},
                        'PRIVATE_KEY'
                    )
                    res.status(200).json({
                        message: 'Success login',
                        token
                    })
                }
            });
        } 
    })
}
module.exports = {
    getAll,
    create,
    login
}