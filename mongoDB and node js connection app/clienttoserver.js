var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
// Running Server Details.
var server = app.listen(8900, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at %s:%s Port", host, port)
});

app.get('/form', function (req, res) {
var html='';
html +="<body>";
html += "<form action='/thank' method='post' name='form1'>";
html += "Name:<input type= 'text' name='name'>";
html += "</p>Email:<input type='text' name='email'>";
html += "</p>address:<input type='text' name='address'>";
html += "</p>Mobile number:<input type='text' name='mobilno'>";
html += "<input type='submit' value='submit'>";
html += "<INPUT type='reset' value='reset'>";
html += "</form>";
html += "</body>";
res.send(html);
});

app.post('/thank', urlencodedParser, function (req, res){
var reply='';
reply += "Your name is" + req.body.name;
reply += "</p>Your E-mail id is" + req.body.email;
reply += "</p>Your address is" + req.body.address;
reply += "</p>Your mobile number is" + req.body.mobilno;
res.send(reply);
});