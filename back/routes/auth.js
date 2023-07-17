const router = require('express').Router();

const { authorizer, fieldsValidator } = require('../middlewares');

const authControllers = require('../controllers/auth');

const signupValidator = fieldsValidator('email', 'username', 'password')
const signinValidator = fieldsValidator('email', 'password')


module.exports = ( db ) => {
    router.post('/signup', signupValidator, authControllers.signup( db ) );
    router.post('/signin', signinValidator, authControllers.signin( db ) );
    router.post('/signout', authorizer(), authControllers.signout() );

    return router;
}