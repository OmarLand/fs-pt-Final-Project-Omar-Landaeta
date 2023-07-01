const errors = require('../../misc/errors');
const queries = require('../../models/transactions');

module.exports = ( db ) => async( req, res, next ) => {

    let dbRes = await queries.createNewTransaction( await db )( req.body );

    console.log( 'dbRes ====>', dbRes );

    if( !dbRes.ok ) return next( errors[500] );

    res.status( 200 ).json({
        success : true,
        data    : dbRes.data 
    })

}