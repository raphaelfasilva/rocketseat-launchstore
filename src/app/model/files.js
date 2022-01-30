const db = require('../../config/db')
module.exports = {
    create({ file, product_id }) {
        const query = `
        INSERT INTO files(
            name,
            path,
            product_id
        ) VALUES ($1,$2,$3)
        RETURNING ID
        `
        const values = [
            file.filename,
            file.path,
            product_id
        ]
        return db.query(query, values)
    },
}