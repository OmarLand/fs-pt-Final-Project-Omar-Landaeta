const errors = require('../../misc/errors');
const queries = require('../../models/products');

module.exports = ( db ) => async( req, res, next ) => {

    let dbRes = await queries.addNewProduct( await db )( req.body );

    console.info( '==>>> ', dbRes );

    if( !dbRes.ok ) return next( errors[500] );
    
    res.status( 200 ).json({
        success : true,
        data    : dbRes.data, 
    })

}