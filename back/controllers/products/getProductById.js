const errors  = require('../../misc/errors');
const queries = require('../../models/products');


module.exports = (db) => async( req, res, next ) => {

    const dbRes = await queries.selectOneProduct( await db )( req.params.id );

    console.info( 'dbRes ===> ', dbRes );

    if( !dbRes.ok ) return next( errors[500] );

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    })


}