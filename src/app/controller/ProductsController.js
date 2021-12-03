const categories = require('../model/categories')
const products = require('../model/products')
module.exports = {
    index(req, res) {
        return res.render("index.njk")
    },
    async create(req, res) {
        const results = await categories.all()
        const categoriesSelected = results.rows
        return res.render("products/create.njk", { categoriesSelected })
    },
    async post(req, res) {
        let results = await products.create(req.body)
        const productid = results.rows[0].id
        results = await categories.all()
        const categoriesSelected = results.rows
        return res.render("products/create.njk", { productid, categoriesSelected })
    }

}