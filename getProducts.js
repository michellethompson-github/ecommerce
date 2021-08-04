const products = require('../products.json')

const getProducts = (req, res) => {
    // console.log(req.query)
    if(req.query.price){  //If price is there
           const items = products.filter((item)=> item.price >= parseInt(req.query.price) )
        //    console.log(items)
          return res.status(200).send(items);
   
    }

    res.status(200).send(products)
}

module.exports = getProducts