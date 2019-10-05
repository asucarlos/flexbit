"use strict";

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbname = "flexbit";

const faker = require("faker");

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    throw err;
  }

  const db = client.db(dbname);
  const collection = db.collection("exercises");

  collection.insert(
    [
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      },
      {
        name: faker.random.word(),
        restTime: faker.random.number({
          min: 30,
          max: 240
        }),
        weight: faker.random.number({
          min: 0,
          max: 1000
        }),
        reps: faker.random.number({
          min: 0,
          max: 100
        }),
        sets: faker.random.number({
          type: Number,
          min: 0,
          max: 10
        }),
        notes: faker.lorem.sentences(),
        creator_id: null,
        _categoryId: "5d879899becc660f5f514f4b"
      }
    ],
    (err, result) => {
      collection.find({}).toArray((err, items) => {
        if (err) {
          throw err;
        }
        console.log("items", items);
        client.close();
      });
    }
  );
});
