require('dotenv').config()

const cors = require('cors')
const express = require('express')
const massive = require('massive')

const productCtrl = require('./controllers/controller.js') 

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbResponse)=>{
    app.set('db', dbResponse)
    console.log('DATABASE')
})

app.use(cors())
app.use(express.json())

app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:id', productCtrl.getProduct)
app.get('/api/product/search/:query', productCtrl.getSearchedProducts)
app.post('/api/product', productCtrl.createProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)
app.put('/api/product/:id', productCtrl.updateProduct)

app.listen(SERVER_PORT, () => {
    console.log("SERVER")
})