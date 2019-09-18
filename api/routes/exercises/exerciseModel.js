"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  // after mvp
  creator_id: {
    type: String
    // ??? how can we change this to mongo_id?
  },
  muscles: {
    type: [String]
    // how can we say an array of strings
  },
  _categoryId: {
    type: Schema.Types.ObjectId,
    require: true
  }
});

module.exports = mongoose.model("exercise", exerciseSchema, "exercises");
