const { hash } = require('simple-stateless-auth-library');
const { createUser } = require('../../models/auth');
const errors = require('../../misc/errors');

module.exports = ( db ) => async (req, res, next) => {

    const { user, email, password } = req.body;

    console.log(` ==> Usuario: ${user} Password registrando: ${password} correo: ${email}`);

    if ( !user || !email || !password  ) return next(errors.wrong_data);

    //Encriptamos el valor del UserPassword
    const encrypted = await hash.encrypt(password);

    const dbRes = await createUser(await db)(user, email, encrypted);

    if( !dbRes.ok ) return next(errors[500]);

    res.status(200).json({
        success : true,
    });

}