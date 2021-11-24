const db = require('../../config/db')
module.exports = {
    create(data) {
        const query = `
        INSERT INTO products(
            category_id,
            user_id,
            name,
            description,
            old_price,
            price,
            quantity
        ) VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING ID
        `
        const values = [
            1,
            1,
            data.name,
            data.description,
            data.old_price || data.price,
            data.price,
            data.quantity
        ]
        return db.query(query, values)
    },
}