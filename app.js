const express = require('express');
const app = express();
const ejs = require('ejs');
const routes = require('./routes/index.js');
const nodemailer = require("nodemailer");

const bodyParser = require("body-parser");


const morgan = require('morgan');


const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // expression static for bootstrap ( in node_modules)
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080, function () {
  routes(app);

});
module.exports = app;