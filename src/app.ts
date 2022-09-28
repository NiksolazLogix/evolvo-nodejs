'use strict'
const express = require('express');
const app = express()
// import { Request, Response } from 'express';
import {Datatest} from './modules/moduletest';

require('dotenv').config();

const dt = new Datatest()

const { log } = console

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.get('/?email=:email', (req:any, res: any) => {
    return res.json({
        title: 'Typescript',
        status: res.statusCode,
        statusSendEmail: dt.sendEmail(req.params.email)
    });
})

app.listen(PORT, () => {
    console.log(`Server running http://${HOST}:${PORT}`);
});