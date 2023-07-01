const { selectAllTransactions } = require('./queries');

// Selecciono todos los proveedores registrados en mi DB
const getTransact = ( db ) => async () => {

    try {

        const response = await db.query( selectAllTransactions() );

        // console.info( '===> response: ', response );

        return {
            ok : true,
            response: response.rows,
        }
        
    } catch (error) {
        console.info('==> Error con el SELECT -> : ', error);
        return{
            ok : false,
            message : error.message,
        }
    }

}

const createNewTransaction = () => async() => {

}

module.exports = {
    getTransact,
    createNewTransaction,
}
