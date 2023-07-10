const router = require('express').Router();

const authRoutes = require('./auth');
const getUsers = require('./users');
const getProducts = require('./products');
const getSuppliers = require('./suppliers');
const getTransactions = require('./transactions');



module.exports = ( db ) => {
    router.use('/auth', authRoutes(db) );
    router.use('/users', getUsers(db) );
    router.use('/products', getProducts(db) )
    router.use('/suppliers', getSuppliers(db) )
    router.use('/transactions', getTransactions(db) )

    return router;
}