var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports.templateController = function (app){
    
    app.get('/templateForm', urlencodedParser, function(req, res){
        
        //read template file
        try {
            templateName = "../templates/clusterDeploy.json"
            var templateFilePath = path.join(__dirname, templateName);
            var template = JSON.parse(fs.readFileSync(templateFilePath, 'utf8'));
          } catch (ex) {
            //return callback(ex);
            return console.error('\n\t Template file read Error: \t' + ex);
        }
    
        //get parameters
        parameters = template.parameters ;
        parameters.resourceGroups = [ { id: '/subscriptions/7c326b71-55e3-4ca7-8372-8227e1354e4c/resourceGroups/IBM-GSL-Broker-Project',
        name: 'IBM-GSL-Broker-Project',
        properties: { provisioningState: 'Succeeded' },
        location: 'eastus',
        tags: {} } ];
        //render
        res.render('advanceForm', { topicHead : 'TemplateForm', parameters: parameters });
    });

    app.post('/resource-groups-list', urlencodedParser, function(req, res){
        console.log(req.body.mykey);
        //res.writeHead(200, {"Content-Type": "json"});
        //res.end('wgewgwhrjuhreju');
        mylist = [
            {
                "name": "Standard_B1ms",
                "numberOfCores": 1,
                "osDiskSizeInMB": 1047552,
                "resourceDiskSizeInMB": 4096,
                "memoryInMB": 2048,
                "maxDataDiskCount": 2
            },
            {
                "name": "Standard_B1s",
                "numberOfCores": 1,
                "osDiskSizeInMB": 1047552,
                "resourceDiskSizeInMB": 2048,
                "memoryInMB": 1024,
                "maxDataDiskCount": 2
            },
            {
                "name": "Standard_B2ms",
                "numberOfCores": 2,
                "osDiskSizeInMB": 1047552,
                "resourceDiskSizeInMB": 16384,
                "memoryInMB": 8192,
                "maxDataDiskCount": 4
            }];
        res.send(mylist);
    })
};

