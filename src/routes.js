const express = require('express')
const routes = express.Router()
const multer = require('./middlewares/multer')
const ProductsController = require("./app/controller/ProductsController")
routes.get('/', ProductsController.index)
routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create")
})
routes.get('/products/create', ProductsController.create)
routes.post('/products', multer.array("photos", 6), ProductsController.post)
routes.put('/products', multer.array("photos", 6), ProductsController.put)
routes.get('/products/:id/edit', ProductsController.edit)
routes.delete('/products', ProductsController.delete)
module.exports = routes