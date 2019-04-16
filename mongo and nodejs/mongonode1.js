var mongoClient=require('mongodb').MongoClient;

var url="mongoDB://localhost:27017/mydb";
mongoClient.connect(url,function(err,db){
	if (err){ throw err;}
	console.log("Database created!!");
	db.close();});