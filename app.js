require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())


const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const userRouter = require('./routes/user')

app.use('/products', productRouter)
app.use('/categories', categoryRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})