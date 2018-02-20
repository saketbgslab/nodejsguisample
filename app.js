var express = require('express');
var bodyParser = require('body-parser');
var templateController = require('templateController');

var app = express();
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.listen(3000);


templateController(app);


/*
    var student = {
        first : req.body.fname,
        last : req.body.lname
    }

*/