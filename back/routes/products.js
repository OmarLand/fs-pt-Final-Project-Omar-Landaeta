const router             = require('express').Router();
const productsController = require('../controllers/products');



module.exports = ( db ) => {
    router.get( '/', productsController.getProducts(db) );
    router.post( '/register', productsController.newProducts(db) );

    return router;
}