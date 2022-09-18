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

app.get('/', (_, res: any) => {
    res.json({
        title: 'Typescript',
        status:  res.status,
        message: dt.init()
    })
})

app.listen(PORT, () => {
    console.log(`Server running http://${HOST}:${PORT}`);
});