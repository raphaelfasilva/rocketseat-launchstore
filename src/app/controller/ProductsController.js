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

        return res.redirect(`/products/${productid}`)
    },
    async edit(req, res) {
        const { id } = req.params
        let results = await products.find(id)
        const product = results.row[0]
        if (!product) return res.send("product not found")
        results = await categories.all()
        const categoriesSelected = results.rows
        return res.render("products/edit.njk", { product, categoriesSelected })

    }

}