const categories = require('../model/categories')
const products = require('../model/products')
const util = require('../../lib/util')
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
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("por favor validar todos os campos")
            }
        }
        let results = await products.create(req.body)
        const productid = results.rows[0].id

        return res.redirect(`/products/${productid}`)
    },
    async edit(req, res) {
        const { id } = req.params
        let results = await products.find(id)
        const product = results.rows[0]
        if (!product) return res.send("product not found")
        product.price = util.formatPrice(product.price)
        product.old_price = util.formatPrice(product.old_price)
        results = await categories.all()
        const categoriesSelected = results.rows
        return res.render("products/edit.njk", { product, categoriesSelected })

    },
    async put(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("por favor validar todos os campos")
            }
        }
        const { id } = req.body
        req.body.price = req.body.price.replace(/\D/g, "")
        if (req.body.old_price != req.body.price) {
            const oldproduct = await products.find(req.body.id)
            req.body.old_price = oldproduct.rows[0].price
        }
        await products.update(req.body)
        return res.redirect(`/products/${id}`)
    },
    async delete(req, res) {
        await products.delete(req.body.id)
        return res.redirect('/products')
    }

}