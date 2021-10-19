const productsCategoriesDB = require('../models/productCategory')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

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
                name_user: req.body.name_user,
                email: req.body.email,
                password: hash
            }
            productsCategoriesDB.query('INSERT INTO users SET ?', userData, function(err) {
                if (err) {
                    console.log(err)
                } else {
                    res.send('success create a new user')
                    console.log(userData)
                }
            })
        }
    })


    // bcrypt.genSalt(3, function(err, salt) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         bcrypt.hash(req.body.password, salt,  function (err, hash) {
    //             if (err) {
    //                 console.log(err)
    //             } else {
    //                 var userData = {
    //                     id: uuid,
    //                     name_user: req.body.name_user,
    //                     email: req.body.email,
    //                     password: hash
    //                 }
    //                 productsCategoriesDB.query('INSERT INTO users SET ?', userData, function(err) {
    //                     if (err) {
    //                         console.log(err)
    //                     } else {
    //                         console.log(userData)
    //                         res.send('success create new user')
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })
}
module.exports = {
    getAll,
    create
}