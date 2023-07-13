const { hash, serialize } = require('simple-stateless-auth-library');
const errors = require('../../misc/errors');
const { selectUser } = require('../../models/auth');

module.exports = (db) => async( req, res, next ) => {

    const { email, password } = req.body;

    if( !email || !password ) return next(errors[400]);

    const dbRes = await selectUser(await db)(email, hash.compare(password));

    if( !dbRes.ok ) return next( errors[dbRes.error_code || 500 ] );
    dbRes.content; // contenido del username
    // console.log( '===>', dbRes.content )

    serialize(res, dbRes);

    res.status(200).json({
        success : true,
    })

}