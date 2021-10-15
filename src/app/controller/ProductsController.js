module.exports = {
    index(req, res) {
        return res.render("index.njk")
    },
    create(req, res) {
        return res.render("products/create.njk")
    }
}