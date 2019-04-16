var mongo=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongo.connect(url,function(err,db)
	{

		if (err){throw err;}	
		db0=db.db("mydb");
		var obj={name:"shikaa"};
		db0.collection("customers").find().toArray(function(err,result)
		{
			if(err){throw err;}
			console.log(result);
			db.close();
		})
		
	});