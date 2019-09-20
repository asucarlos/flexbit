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
  measurement: {
    type: String,
    require: true
  }
});

mongoose.model("category", categorySchema, "categories");
