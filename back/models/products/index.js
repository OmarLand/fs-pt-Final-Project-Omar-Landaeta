const { selectAllProducts } = require('./queries');

const getProducts = ( db ) => async () => {

    try {

        const response = await db.query( selectAllProducts() );
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

module.exports = {
    getProducts,
}