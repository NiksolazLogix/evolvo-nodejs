'use strict';
exports.__esModule = true;
var express = require('express');
var app = express();
// import { Request, Response } from 'express';
var moduletest_1 = require("./src/modules/moduletest");
require('dotenv').config();
var dt = new moduletest_1.Datatest();
var log = console.log;
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 3000;
app.get('/', function (_, res) {
    res.json({
        title: 'Typescript',
        status: res.status,
        message: dt.init()
    });
});
app.listen(PORT, function () {
    console.log("Server running http://".concat(HOST, ":").concat(PORT));
});
