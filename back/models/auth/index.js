const { insertUser, selectByEmail } = require('./queries')

// Función para insertar datos del usuario nuevo
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

// Función que busca y compara los datos metidos con la base de datos
const selectUser = (db) => async( email, compareFn ) => {

    try {

        const user = await db.maybeOne( selectByEmail( email ) );
        console.log( '=>>>> USER --- ', email );

        if ( !email ){
            return {
                ok         : false,
                error_code : 'wrong_data'
            }
        }

        // Ahora busco el PASSWORD si es el correcto no muestra error
        const areEqual = await compareFn( user.password );
        // console.info( '¿Coinciden? =>> ', areEqual );

        if( !areEqual ){
            return {
                ok         : false,
                error_code : 'wrong_data'
            }
        }

        //Si todo fluye le doy acceso....
        return {
            ok : true,
            dbRes: {
                username: user.email,
            }
        }

    } catch (error) {
        console.info( '=> SELECT error en Usuario... ', error.message );
        return {
            ok      : false,
            message : error.message
        }
    }

}


module.exports = {
    createUser,
    selectUser,
}