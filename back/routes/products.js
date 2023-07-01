
const router             = require('express').Router();
const productsController = require('../controllers/products');

module.exports = ( db ) => {
    router.get( '/', productsController.getProducts(db) );
    router.get( '/:id', productsController.getProductById(db) );
    router.post( '/register', productsController.newProducts(db) );
    router.put( '/edit/:id', productsController.updateProduct(db) );
    router.delete( '/edit/:id', productsController.deleteProduct(db) );

    return router;
}