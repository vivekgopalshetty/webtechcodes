var mongo=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongo.connect(url,function(err,db)
	{

		if (err){throw err;}	
		db0=db.db("mydb");
		db0.createCollection('customers',function(err)
			{
				if(err){throw err;}
				console.log('createCollection done');
				db.close();
			});
		
	});