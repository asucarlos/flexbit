'use strict';

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'flexbit';

const faker = require ('faker');


MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    throw err;
  }

  const db = client.db(dbname);
  const collection = db.collection('fakeCategories');

  collection.insert(
    [
      {
        "muscle": "Shoulders"
      },
      {
        "muscle": "Triceps"
      },
      {
        "muscle": "Biceps"
      },
      {
        "muscle": "Chest"
      },
      {
        "muscle": "Back"
      },
      {
        "muscle": "Legs"
      },
      {
        "muscle": "Abs"
      }
    ],
    (err, result) => {
      collection.find({}).toArray((err, items) => {
        if (err) {
          throw err;
        }
        console.log('items', items);
        client.close();
      });
    }
  )

})
