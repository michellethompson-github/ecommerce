const products = require('../products.json') //Including Products Array

const getProduct = (req, res) => {
    res.status(200);
    // req.params.id
    const required_item = products.find((item)=> {
        return item.id === parseInt(req.params.id)
    })

    if(required_item){
        res.status(200).send(required_item)
    }
    else {
        res.status(500).send('Item not in list')
    }
}

module.exports = getProduct //Export A Module 
