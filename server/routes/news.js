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

router.get('/archive', function (req, res, next) {
  console.log(req.query.startDate);
  console.log(req.query.endDate);
    mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;
    var collection = db.collection('news');
    var result = collection.find({ "fingerprint.creationTime": { $gte: isodate(req.query.startDate), $lte: isodate(req.query.endDate) } }).toArray(function (err, data) {
      res.send(data);
    }); 
  });
}); 



router.get('/popular', function (req, res, next) {
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');

    var result = collection.aggregate([
      // Project with an array length
      {
        $project: {
          "_id": 1,
          "fingerprint": 1,
          "title": 1,
          "description": 1,
          "image": 1,
          "author": 1,
          "tags": 1,
          "reactCount": { $size: { "$ifNull": ["$reactions", []] } },
          "reactions": 1
        },

      },
      { $sort: { "reactCount": -1 } },
      { $limit: 5 }
    ]).toArray(function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data);
    });
  });
});

router.get('/search', function (req, res, next) {
  console.log(req.query.tag);
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;
    var collection = db.collection('news');
    var result = collection.find({ "tags": req.query.tag }).toArray(function (err, data) {
      console.log(data);
      res.send(data);
    });
  });
});

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
          "image": 1,
          "author": 1,
          "tags": 1,
          "reactCount": { $size: { "$ifNull": ["$reactions", []] } },
          "reactions": 1
        }
      },
    ]).toArray(function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data);
    });
  });
});

// Get single news
router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');

    collection.findOne({ "_id": ObjectId(req.params.id) }, function (err, data) {
      if (err)
        throw err;

      res.send(data)
    });
  });
});

// Edit news
router.put('/', upload.single('image'), function (req, res, next) {
  var news = req.body; //JSON.parse(req.body);
  if (req.file) {
    news.image = req.file.buffer.toString('base64');
  }
  news.fingerprint = {};
  news.fingerprint.lastModificationTime = new Date();

  console.log(news);

  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');
    var id = news._id.toString();
    news._id = ObjectId(id);

    collection.update({ "_id": ObjectId(id) }, news, { upsert: false, writeConcern: { w: "majority" } },
      function (err, data) {
        if (err) throw err;

        db.close();
        res.send(data);
      });
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


module.exports = router;
