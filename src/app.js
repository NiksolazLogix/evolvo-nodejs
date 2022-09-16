'use strict'

const express = require('express')
const app = express()
require('dotenv').config();

const { log } = console

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

log('>>>>>', app, '<<<<<')

app.get('/', (req, res) => {
    res.json({
        query: req.query,  
        method: req.method,
        status: res.statusCode,
        message: res.statusMessage
    })
})
app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server running http://${HOST}:${PORT}`);
});