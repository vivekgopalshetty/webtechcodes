var express=require('express');
var bodyparser=require('body-parser');
var mongo=require('mongodb').MongoClient;

var app=express();
var urlencoderParser=bodyparser.urlencoded({extended:true});

app.use(express.static(__dirname+"/../public"));

app.get('/register',function(req,res){
	res.sendFile(__dirname+"register.html");
});

app.post("/process_post",urlencoderParser,function(req,res){
	response={name:req.body.name,age:req.body.age};

	mongo.connect("mongodb://localhost:27017",function(err,db)
	{
		if (err){throw err;}
		console.log('connected to database');
		var dbo=db.db('mydb');
		db.collection("customers").insertOne(response,function(err,result){
			if (err){throw err;}
			console.log(response);
		});
	});

	res.end(JSON.stringfy(response));
	var server=app.listen(8900,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("on listen http://%s:%s/register",host,port);

	});

});