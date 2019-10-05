"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
// const exerciseRef = require("../exercises/exerciseModel");

const exerciseSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  restTime: {
    type: Number,
    min: 0,
    max: 480
  },
  weight: {
    type: Number,
    min: 0,
    require: true
  },
  reps: {
    type: Number,
    min: 0,
    required: true
  },
  // after mvp
  creator_id: {
    type: String
    // ??? how can we change this to mongo_id?
  }
  // _categoryId: {
  //   type: Schema.Types.ObjectId,
  //   ref: categoryRef
  // }
});

const sessionSchema = new Schema({
  exercises: [exerciseSchema],
  start_time: {
    type: Date
  },
  end_time: {
    type: Date
  }
});

module.exports = mongoose.model("session", sessionSchema, "sessions");
