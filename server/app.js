const express = require('express');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router)

module.exports = app;