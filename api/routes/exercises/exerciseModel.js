"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const categoryRef = require("../categories/categoryModel");

const exerciseSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  restTime: {
    type: Number,
    min: 0,
    max: 480,
    require: true
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
  },
  _categoryId: {
    type: Schema.Types.ObjectId,
    ref: categoryRef,
    require: true
  }
});

module.exports = mongoose.model("exercise", exerciseSchema, "exercises");
