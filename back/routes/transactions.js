const router              = require('express').Router();
const transaController = require('../controllers/transactions');



module.exports = ( db ) => {
    router.get( '/', transaController.getTransactions( db ) );
    router.get( '/new', transaController.getTransactions( db ) );

    return router;
}