const { Pool } = require("pg")

module.exports = new Pool({
    user: 'launchstore',
    password: "launchstore123@",
    host: "localhost",
    port: 5432,
    database: "launchstore"
})