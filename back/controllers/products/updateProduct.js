const errors  = require('../../misc/errors');
const queries = require('../../models/products');

module.exports = ( db ) => async( req, res, next ) => {
    console.info('In the Update Controller....');

    let dbRes = await queries.updateTheProduct( await db )(req.params.id, req.body );

    console.info( '==>>> ', dbRes );

    if( !dbRes.ok ) return next( errors[500] );
    
    res.status( 200 ).json({
        success  : true,
        message  : 'Producto actualizado correctamente.', 
    })

}