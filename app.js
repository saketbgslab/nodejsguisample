var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.listen(3000);


app.get('/:name', function(req, res){
    var data = {age:21, job:"intern"};
    res.render('home', {person: req.params.name, data: data});
})

app.get('/student/form', function(req, res){
    res.render('form', {topicHead: 'FORM'})
});

app.post('/student/add', urlencodedParser, function(req, res){
    var data = {age:21, job:"intern"};
    console.log(req.body);
    res.render('home',{ person: req.body.fname + '  ' + req.body.lname, data: data});
})


/*
    var student = {
        first : req.body.fname,
        last : req.body.lname
    }

*/