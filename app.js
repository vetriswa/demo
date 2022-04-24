const http = require('http');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log('This always run');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('in another middleware !');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add product</button></form>');
});
app.use('/product', (req, res, next) => {
    console.log('req.body');
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('in another middleware !');
    res.send('<h1>hello from express</h1>');
});


//const server = http.createServer(app);

//server.listen(3000);

app.listen(3000);