require('dotenv').config();
const express      = require('express');
const db           = require('./configs/db');
const app          = express();
const cookieParser = require('cookie-parser');
const errors       = require('./misc/errors');

// Redirecciono mi atención a las rutas...
const routes  = require( './routes' );

const { cookie } = require('simple-stateless-auth-library');


app.use( express.json() );

// Llamo a mi funcion de cookie-parser
app.use( cookieParser() );

app.use( routes(db) );

app.use( (req, res, next) =>{
    next(errors[404]);
});

app.use( ({statusCode, error}, req, res, next) =>{
    res.status(statusCode).json({
        success : false,
        message : error.message,
    });
});

app.listen( process.env.PORT, () => console.info(`===> Listening at ${process.env.PORT}`));