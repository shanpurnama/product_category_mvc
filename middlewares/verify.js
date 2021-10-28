var jwt = require('jsonwebtoken')
function autenticated (req, res, next) {
    try {
        jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
        next()
      } catch(err) {
          console.log(err)
        res.status(400).json({
            message: 'Internal Error'
        })
      }
}

function autenticatedUpdate (req, res, next) {
    try {
        jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
        next()
      } catch(err) {
        console.log(err)
        res.status(404).json({
            message: 'Internal Server Error'
        })
      }
}

function autenticatedDelete (req, res, next) {
    try {
        jwt.verify(req.headers.token, process.env.PRIVATE_KEY)
        next()
      } catch(err) {
        console.log(err)
        res.status(404).json({
            message: 'Internal Server Error'
        })
      }
}



module.exports = {
    autenticated,
    autenticatedDelete,
    autenticatedUpdate
}