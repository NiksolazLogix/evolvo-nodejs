'use strict'

import express, { Request, Response } from 'express';
import {Datatest} from './modules/moduletest';

const app = express()

require('dotenv').config();

const dt = new Datatest()

const { log } = console

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
        title: 'Typescript',
        status:  res.status,
        message: dt.init()
    })
})

app.listen(PORT, () => {
    console.log(`Server running http://${HOST}:${PORT}`);
});