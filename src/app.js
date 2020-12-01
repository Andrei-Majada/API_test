const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Rotas
const indexRoute = require('./routes/indexRoute');
const productsRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoute);

module.exports = app;