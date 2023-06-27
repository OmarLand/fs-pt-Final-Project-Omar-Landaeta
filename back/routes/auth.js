const router = require('express').Router();

const { authorizer } = require('../middlewares');

const authControllers = require('../controllers/auth');

module.exports = ( db ) => {
    router.post('/signup',  authControllers.signup( db ) );
    router.post('/signin',  authControllers.signin( db ) );
    router.post('/signout', authorizer, authControllers.signout() );

    return router;
}