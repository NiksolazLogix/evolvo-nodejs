'use strict'
const express = require('express');
const app = express()


import {Datatest} from './modules/moduletest';
import Permission from './middlewares/permission';
import Authentication from './middlewares/authentication';

require('dotenv').config();

const dt = new Datatest()

const { log } = console

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.use('/emails', Permission)
app.use('/email', Permission, Authentication)

app.get('/',  (req:any, res: any) => {
    res.send('Home Page with Typescript')
})
app.get('/emails', (req:any, res: any) => {
    
    return res.json({
        title: 'Typescript',
        status: res.statusCode,
        emails: [
            'nicola@test.com',
            'monica@test.com',
            'mario@test.com',
            'piero@test.com',
        ]
    });
})
app.get('/email', (req:any, res: any) => {
    return res.json({
        title: 'Typescript',
        status: res.statusCode,
        statusSendEmail: dt.sendEmail(req.query.email)
    });
})

app.listen(PORT, () => {
    console.log(`Server running http://${HOST}:${PORT}`);
});