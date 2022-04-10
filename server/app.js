const express = require('express');


const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

module.exports = app;