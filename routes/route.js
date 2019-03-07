var MongoClient = require('mongodb').MongoClient;
const db = require('./../dataFetch/findData');

const express = require('express');

const router = express.Router();
const dbURL = "mongodb://192.168.6.224:27017/Scheduler"

router.get('/scheduler', (req, res, next) => {

    db.fetchData(function (d) {
        res.send(d);
    })
})

router.get('/getTollData',(req,res,next)=>
    db.getTollData(function (data){
        res.send(data);
    })

)

router.get('/getApplicationList', (req, res, next) => {
    MongoClient.connect(dbURL, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Scheduler");
        dbo.collection("application").find().toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.send(result);
        });
      });
})

router.post('/getData', (req, res, next) => {
    MongoClient.connect(dbURL, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Scheduler");
        const appName = req.param('name');
        //  dbo.collection("testCases").distinct("categoryName", { "applicationName" : appName })
        //  .then(function(result){
        //     res.send(result)
        //  })

        dbo.collection("testCases").find({ "applicationName" : appName }).toArray(function(err, result){
            if (err) throw err;
            res.send(result);
        })
    });
})


module.exports = router; 