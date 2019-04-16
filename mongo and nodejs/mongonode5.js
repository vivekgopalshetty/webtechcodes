var mongo=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongo.connect(url,function(err,db)
	{

		if (err){throw err;}	
		db0=db.db("mydb");
		var obj={name:"vivek"};
		var obj1={$set:{name:"vivekgopalshetty"}};
		db0.collection("customers").updateOne(obj,obj1,function(err,res)
		{
			if(err){throw err;}
			console.log("1 document updated");
			db.close();
		})
		
	});