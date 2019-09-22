"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  restTime: {
    type: Number,
    require: true
  },
  weight: {
    type: Number,
    require: true
  },
  reps: {
    type: Number,
    required: true
  },
  // after mvp
  creator_id: {
    type: String
    // ??? how can we change this to mongo_id?
  },
  _categoryId: {
    type: Schema.Types.ObjectId,
    require: true
  }
});

module.exports = mongoose.model("exercise", exerciseSchema, "exercises");
