"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const exerciseRef = require('../exercises/exerciseModel');

const sessionSchema = new Schema({
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: exerciseRef
  }],
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("session", sessionSchema, "sessions");
