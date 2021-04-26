const express = require('express');
const app = express();
const routes = require('./routes');
const { notFoundHandler } = require('./middleware/ErrorHandlers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.use(notFoundHandler);


module.exports = app;