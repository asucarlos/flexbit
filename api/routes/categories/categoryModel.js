"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
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
  }
});

module.exports = mongoose.model("category", categorySchema, "catergories");
