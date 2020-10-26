const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const items =  products.filter(el => el.price >= parseFloat(req.query.price))
        return res.status(200).send(items)
    }
    res.status(200).send(products)
}

// parseInt removes numbers after decimal, parseFloat retains them

module.exports = getProducts