
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.get('/login', function (req, res) {
res.sendFile( __dirname + "/" + "post.html" );
});

app.post('/login', urlencodedParser, function (req, res) {
var reply='';
reply += "Your name is " + req.body.name;
reply += "</p>Your regno is " + req.body.regno;
reply += "</p>Your cgpa is " + req.body.cgpa;
res.send(reply);
});

var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
});