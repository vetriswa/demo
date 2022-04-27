const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./error');
const app = express();

const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
//const products = require('./products');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
a //pp.use(products);

app.use(errorController.get404);

app.listen(3000);