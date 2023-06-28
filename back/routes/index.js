const router = require('express').Router();

const authRoutes = require('./auth');
const getProducts = require('./products');


module.exports = ( db ) => {
    router.use('/auth', authRoutes(db) );
    router.use('/products', getProducts(db) )

    return router;
}