require('dotenv').config();
const express = require('express');
const db      = require('./configs/db');
const app     = express();
const errors  = require('./misc/errors');


app.use( express.json() );

app.use( (req, res, next) =>{
    next(errors[404]);
});

app.use( ({statusCode, error}, req, res, next) =>{
    res.status(statusCode).json({
        success : false,
        message : error.message,
    });
});

app.listen( process.env.PORT, () => console.info(`=> Listening at ${process.env.PORT}`));