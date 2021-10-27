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

module.exports = {
    autenticated
}