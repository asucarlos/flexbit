"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userRef = require("../users/userModel");
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
  sets: {
    type: Number,
    min: 0,
    required: true
  },
  notes: {
    type: String
  },
  // after mvp
  creator_id: {
    type: String
    // ??? how can we change this to mongo_id?
  }
});

const sessionSchema = new Schema({
  exercises: [exerciseSchema],
  date: {
    type: Date
    // required: true
  },
  // after mvp
  start_time: {
    type: Date
  },
  end_time: {
    type: Date
  },
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  }
});

module.exports = mongoose.model("session", sessionSchema, "sessions");
