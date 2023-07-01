const router = require('express').Router();

const { authorizer, validator } = require('../middlewares');

const authControllers = require('../controllers/auth');

module.exports = ( db ) => {
    router.post('/signup', validator, authControllers.signup( db ) );
    router.post('/signin', validator, authControllers.signin( db ) );
    router.post('/signout', authorizer, authControllers.signout() );

    return router;
}