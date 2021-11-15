var express = require('express');
var app = express();
var path = require('path') 

app.use(express.static("dist"))

app.get('/', function(req, res) {
    //app.use('/static', express.static(__dirname + '/public'));
    // app.use(express.static(path.join(__dirname,'./dist'))); 
})

app.listen(5000, function () {
    console.log('app is running at port 5000')
  })