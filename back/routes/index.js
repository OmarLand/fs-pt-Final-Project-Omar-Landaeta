const router = require('express').Router();

const authRoutes = require('./auth');
const getProducts = require('./products');
const getSuppliers = require('./suppliers');


module.exports = ( db ) => {
    router.use('/auth', authRoutes(db) );
    router.use('/products', getProducts(db) )
    router.use('/suppliers', getSuppliers(db) )

    return router;
}