var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.listen(3000);

app.get('/:name', function(req, res){
    res.render('home', {person: req.params.name});
})