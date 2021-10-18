require('dotenv').config()


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())


const productRouter = require('./routes/product')
app.use('/products', productRouter)
const categoryRouter = require('./routes/category')
app.use('/categories', categoryRouter)

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})