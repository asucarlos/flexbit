"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const historySchema = new Schema({
  sessionId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  Date: {
    type: Date
  }
});

module.exports = mongoose.model("history", historySchema, "history");
