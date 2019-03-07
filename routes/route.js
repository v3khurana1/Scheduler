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

router.post('/scheduler1', (req, res, next) => {

    console.log("Request received")

    res.send({ name: 123 });

})

router.get('/home', (req, res, next) => {

    res.send("foobar");

})

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
        console.log(req.param('name'))
        const appName = req.param('name');
         res.send(dbo.collection("testCases").find({ "applicationName" : appName }))
    });
})


module.exports = router; 