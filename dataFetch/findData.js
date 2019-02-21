var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";



module.exports.fetchData = function(callback){

  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var dbo = db.db("user");

    dbo.collection("user").findOne({}, function(err, result) {

      if (err) throw err;

      console.log("in function")

      console.log(result);

      db.close();

     callback(result);

    });

  });

}