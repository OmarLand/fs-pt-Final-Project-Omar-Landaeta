const router              = require('express').Router();
const suppliersController = require('../controllers/suppliers');



module.exports = ( db ) => {
    router.get( '/', suppliersController.getSuppliers(db) );
    router.post( '/new', suppliersController.newSuppliers(db) );

    return router;
}