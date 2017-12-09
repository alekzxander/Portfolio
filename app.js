const express = require('express');
const app = express();
const ejs = require('ejs');
const routes = require('./models/route.js');
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // expression static for bootstrap ( in node_modules)
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080, function(){
    routes(app);
    
      });
module.exports = app;