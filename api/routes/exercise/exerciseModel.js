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
    type: Array
    // how can we say an array of strings
  },
  category: {
    type: Object
    // how can we say object should include additional information
  }
});

module.exports = mongoose.model("exercise", exerciseSchema, "exercises");
