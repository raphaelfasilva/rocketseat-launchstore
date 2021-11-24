const categories = require('../model/categories')

module.exports = {
    index(req, res) {
        return res.render("index.njk")
    },
    async create(req, res) {
        const results = await categories.all()
        const categoriesSelected = results.rows
        return res.render("products/create.njk", { categoriesSelected })
    },
    post(req, res) {

    }
}