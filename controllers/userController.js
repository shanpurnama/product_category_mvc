const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

function getAll(req, res) {
    productsCategoriesDB.query('SELECT * FROM users', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
}

function create(req, res) {
    var uuid = uuidv4()
    bcrypt.hash(req.body.password, 3, function(err, hash) {
        if (err) {
            console.log(err)
        } else {
            var userData = {
                id: uuid,
                email: req.body.email,
                password: hash
            }
            productsCategoriesDB.query('INSERT INTO users SET ?', userData, function(err) {
                if (err) {
                    console.log(err)
                } else {
                    res.send('success create a new user')
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
        // console.log(data[0].email)
        if (err) {
            console.log(err)
        } else if (data.length === 0) {
            res.status(400).json()
            var message = 'cant find the email'
            console.log(message)
        } else if (req.body.password === req.body.password) {
            bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
                // result == true
            });
        } 
    })
}
module.exports = {
    getAll,
    create,
    login
}