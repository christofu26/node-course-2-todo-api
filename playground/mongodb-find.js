var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log("Unable to connect to MongoDB");
  }

  console.log("Connected to MongoDB server");

  db.collection('Users').find({name: "Chris"}).toArray().then(function(docs) {
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err) {
    console.log('JAJAAJJA');
  });

  db.collection('Users').find().count().toArray().then(function(docs) {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err) {
    console.log('Unable to access Users');
  });

  // db.close();
});
