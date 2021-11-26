const express = require('express')
const routes = express.Router()
const ProductsController = require("./app/controller/ProductsController")
routes.get('/', ProductsController.index)
routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create")
})
routes.get('/products/create', ProductsController.create)
routes.post('/products', ProductsController.post)
module.exports = routes