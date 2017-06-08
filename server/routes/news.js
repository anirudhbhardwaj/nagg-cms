var express = require('express');
var router = express.Router();
var constants = require('../constants');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

var dbUri = constants.MONGO_DB_PATH + constants.URL_DELIMITER + constants.DB_NAME;

// Get all news
router.get('/', function (req, res, next) {
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');
    var result = collection.find({}).toArray(function(err, data) {
       res.send(data);
    });
  });
});

// post new news
router.post('/', function (req, res, next) {
  req.body.fingerprint.lastModificationTime = new Date();
  req.body.fingerprint.creationTime = new Date();

  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');
    collection.insert(req.body, function (err, docs) {
      res.send(docs);
      db.close();
    });
  });
});

module.exports = router;
