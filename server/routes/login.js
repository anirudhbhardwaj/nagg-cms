var express = require('express');
var router = express.Router();
var constants = require('../constants');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var multer = require('multer');
var FormData = require('form-data');
var mimie = require('mime');
var path = require('path');
var fs = require('fs');
var bson = require('bson');
var isodate = require("isodate");
var ObjectId = require('mongodb').ObjectID

var storage = multer.memoryStorage();

var upload = multer({ storage: storage });

var dbUri = constants.MONGO_DB_PATH + constants.URL_DELIMITER + constants.DB_NAME;

router.get('/', function (req, res, next) {
  console.log(req.query.username );
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    var collection = db.collection('users');
    collection.findOne({ username: req.query.username }, function (err, user) {
        if (err) throw err;
        if (user && user.password == req.query.password) {
         res.send(user)
            // authentication successful
        } else {
                // authentication failed
           res.status(400).send('Username or password is incorrect');
        }
    });
  });
});

module.exports = router;
