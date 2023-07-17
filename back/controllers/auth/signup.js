const { hash } = require('simple-stateless-auth-library');
const { createUser } = require('../../models/auth');
const errors = require('../../misc/errors');

module.exports = ( db ) => async (req, res, next) => {

    const { username, email, password } = req.body;

    console.log(` ==> Usuario: ${username} Password registrando: ${password} correo: ${email}`);

    if ( !username || !email || !password  ) return next(errors.wrong_data);

    //Encriptamos el valor del UserPassword
    const encrypted = await hash.encrypt(password);

    const dbRes = await createUser(await db)(username, email, encrypted);

    if( !dbRes.ok ) return next(errors[500]);

    res.status(200).json({
        success : true,
    });

}