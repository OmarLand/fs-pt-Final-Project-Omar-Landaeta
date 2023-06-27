const { insertUser } = require('./queries')

const createUser = ( db ) => async( user, email, password ) => {

    try {

        await db.query( insertUser(  user, email, password ) );
        
        return {
            ok: true,
        }
        
    } catch (error) {
        console.info('==> Error creando el usuario: ', error.message);
        return {
            ok      : false,
            message : error.message
        }
    }

}

module.exports = {
    createUser,
}