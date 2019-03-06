
var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://192.168.6.224:27017/testDB";


module.exports.fetchData = function (callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");
    dbo.collection("user").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      callback(result);
    });

  });
}


module.exports.getTollData = function (callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");
    dbo.collection("user").find({},{"tollName":1, _id:0}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      callback(result);
    });

  });
}

module.exports.writeData = function (callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");
    var myobj = [
      {
        tollName: 'FirstToll', tollId: '1' , testCase:
          [{ testCaseName: 'John', testCaseId: 'Highway 71' },
          { testCaseName: 'Peter', testCaseId: 'Lowstreet 4' },
          { testCaseName: 'Amy', testCaseId: 'Apple st 652' },
          { testCaseName: 'Hannah', testCaseId: 'Mountain 21' }
          ]
      },

      {
        tollName: 'SecondToll', tollId: '2' , testCase:
          [
            { testCaseName: 'Michael', testCaseId: 'Valley 345' },
            { testCaseName: 'Sandy', testCaseId: 'Ocean blvd 2' },
            { testCaseName: 'Betty', testCaseId: 'Green Grass 1' },
            { testCaseName: 'Richard', testCaseId: 'Sky st 331' }
          ]
      },

      {
        tollName: 'ThirdToll', tollId: '3' , testCase:
          [
            { testCaseName: 'Susan', testCaseId: 'One way 98' },
            { testCaseName: 'Vicky', testCaseId: 'Yellow Garden 2'},
            { testCaseName: 'Ben', testCaseId: 'Park Lane 38' }
          ]
      },

      {
        tollName: 'FourthToll', tollId: '4' , testCase:
          [
            { testCaseName: 'William', testCaseId: 'Central st 954' },
            { testCaseName: 'Chuck', testCaseId: 'Main Road 989' },
            { testCaseName: 'Viola', testCaseId: 'Sideway 1633' }
          ]
      }
    ];
    dbo.collection("user").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  })
}; 