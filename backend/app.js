const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlers = require('./middleware/errorHandlers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.use(errorHandlers.notFound);
app.use(errorHandlers.validation);
app.use(errorHandlers.production);


module.exports = app;