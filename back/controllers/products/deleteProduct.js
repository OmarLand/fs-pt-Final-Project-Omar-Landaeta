const errors  = require('../../misc/errors');
const queries = require('../../models/products');

module.exports = ( db ) => async( req, res, next ) => {
    console.info('In the Delete Controller....');

    let dbRes = await queries.deleteTheProduct( await db )(req.params.id);

    console.info( '==>>> ', dbRes );

    if( !dbRes.ok ) return next( errors[500] );
    
    res.status( 200 ).json({
        success  : true,
        message  : 'Producto se ha eliminado correctamente.', 
    })

}