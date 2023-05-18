require('dotenv').config()

const config = {
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'localhost',
    dbUrl: process.env.DB_URL
}

module.exports = { config }