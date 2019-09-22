"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const sessionRef = require("../sessions/sessionModel");

const historySchema = new Schema({
  _sessionId: {
    type: Schema.Types.ObjectId,
    ref: sessionRef,
    required: true
  },
  startTime: {
    type: Date, // year-month-date
    required: true
  },
  endTime: {
    type: Date, //2019-05-01
    required: true
  }
});

/*
{
	"data" : {
		"_sessionId": "5d82bbb8f5077f486fd6bddc",
		"startTime": "Sun Sep 22 2019 15:04:44 GMT-0400 (Eastern Daylight Time)",
		"endTime" :"Sun Sep 22 2019 15:04:44 GMT-0400 (Eastern Daylight Time)"
	}
}
*/

module.exports = mongoose.model("history", historySchema, "history");
