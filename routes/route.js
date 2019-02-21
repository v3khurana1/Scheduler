const db = require('./../dataFetch/findData');

const express = require('express');



const router = express.Router();



router.get('/scheduler', (req, res, next) => {

    console.log("Request received")

    console.log("Data from db")



    db.fetchData(function (d) {

        res.send(d);

    })





})

router.post('/scheduler1', (req, res, next) => {

    console.log("Request received")

    res.send({ name: 123 });





})

router.get('/home', (req, res, next) => {

    res.send("foobar");

})



module.exports = router; 