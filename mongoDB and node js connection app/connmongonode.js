var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/login', function (req, res) {
res.sendFile( __dirname + "/" + "post.html" );
});

app.post('/process_post', urlencodedParser, function (req, res) {
// Prepare output in JSON format
	var response = {
	name:req.body.name,
	regno:req.body.regno,
	cgpa:req.body.cgpa
	};

	MongoClient.connect('mongodb://localhost:27017/newdb', function(err, db)
	{
	if (err) throw err;
	console.log("Connected to Database");
	var db=db.db('newdb');
	//insert record
	db.collection('users').insert(response, function(err, result)
	{
	if (err) throw err;
	console.log("Record added" );
	});
	});
	console.log(response);

	res.end(JSON.stringify(response));
	});


	var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
});