//Load the express module
var express = require('express');
var app = express();

//Respond to requests for / 
app.get('/', function(req, res) {
    res.send('ALOOOO')
});

app.listen(3000, function() {
    console.log('Express server started ok.')
});