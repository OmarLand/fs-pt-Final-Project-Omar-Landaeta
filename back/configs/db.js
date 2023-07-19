const slonik = require('slonik');

// require('dotenv').config()

module.exports = slonik.createPool( process.env.DATABASE_URL );