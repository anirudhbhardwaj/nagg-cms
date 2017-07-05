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


var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

var dbUri = constants.MONGO_DB_PATH + constants.URL_DELIMITER + constants.DB_NAME;

// Get all news
router.get('/', function (req, res, next) {
  mongodb.MongoClient.connect(dbUri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('news');
    var result = collection.find({}).toArray(function (err, data) {
      res.send(data);
    });
  });
});

var dir = path.join(__dirname, 'uploads');
var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

router.get('/uploads/:filename', function (req, res) {
  var file = path.join(dir);
  if (file.indexOf(dir + path.sep) !== 0) {
    return res.status(403).end('Forbidden');
  }
  var type = mime[path.extname(file).slice(1)] || 'text/plain';
  var s = fs.createReadStream(file);
  s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
});

// post new news
router.post('/', upload.single('image'), function (req, res, next) {
  console.log(req.body.model);
  var news = JSON.parse(req.body.model);
  if (req.file) {
    news.imageUrl = req.file.filename;
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
