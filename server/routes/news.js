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

var storage = multer.memoryStorage();

var upload = multer({ storage: storage });

var dbUri = constants.MONGO_DB_PATH + constants.URL_DELIMITER + constants.DB_NAME;

// Get all news
router.get('/', function (req, res, next) {
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');

    var result = collection.aggregate([
      // Project with an array length
      {
        $project: {
          "fingerprint": 1,
          "title": 1,
          "description": 1,
          "imageUrl": 1,
          "author": 1,
          "tags": 1,
          "reactCount": { $size: { "$ifNull": [ "$reactions", [] ] } },
          "reactions":1
        }
      },
    ]).toArray(function (err, data) {
      if (err)  {
      console.log(err)
      }
      res.send(data);
    });

    // var result = collection.find({}).toArray(function (err, data) {
    //   res.send(data);
    // });
  });
});

// post new news
router.post('/', upload.single('image'), function (req, res, next) {
  console.log(req.body.model);
  var news = JSON.parse(req.body.model);
  if (req.file) {
    news.image = req.file.buffer.toString('base64');
  }
  
  news.fingerprint = {};
  news.fingerprint.lastModificationTime = new Date();
  news.fingerprint.creationTime = new Date();

  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');
    collection.insert(news, function (err, docs) {
      res.send(docs.ops[0]);
      db.close();
    });
  });
});

router.get('/search', function (req, res, next) {
  console.log(req.body);
  // mongodb.MongoClient.connect(dbUri, function (err, db) {
  //   if (err) throw err;

  //   var collection = db.collection('news');
  //   var result = collection.find(req.body).toArray(function (err, data) {
  //     res.send(data);
  //   });
  // });
});

module.exports = router;
