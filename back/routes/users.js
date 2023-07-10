const router          = require('express').Router();
const { authorizer }  = require('../middlewares')
const usersController = require('../controllers/users');



module.exports = ( db ) => {
    router.get( '/', authorizer, usersController.getUsers() );


    return router;
}