var mongo=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongo.connect(url,function(err,db)
	{

		if (err){throw err;}	
		db0=db.db("mydb");
		var obj={name:"shikhar",age:25};
		db0.collection("customers").insertOne(obj,function(err,res)
		{
			if(err){throw err;}
			console.log("1 document inserted");
			db.close();
		})
		
	});