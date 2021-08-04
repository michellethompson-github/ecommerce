const express = require('express') //Express Added
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express()       //App Variable

const port = 3003       //Defining Port

//GET, POST, PUT, DELETE 
app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(port, ()=> {
    console.log("Server Running, listening to port!")
    
})


//node filename