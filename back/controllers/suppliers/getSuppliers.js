const errors  = require('../../misc/errors');
const queries = require('../../models/suppliers')


module.exports = ( db ) => async( req, res, next ) =>{

    const dbRes = await queries.getSuppliers( await db )();

    console.info('====> dbRes ::: ', dbRes);


    if( !dbRes.ok ) return next( errors[500] );
    
    res.status(200).json({
        success : true,
        data : dbRes.response,
    })

}