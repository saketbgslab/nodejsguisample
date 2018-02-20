var fs = require('fs');
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports.templateController = function (app){
    
    app.get('/templateForm', urlencodedParser, function(req, res){
        
        //read template file

        //get parameters

        //
    });
};

