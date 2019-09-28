"use strict";

const History = require("./historyModel");

exports.listHistory = async () => {
  try {
    const history = History.find({});
    return history;
  } catch (e) {
    console.error("unable to list user history");
    throw e;
  }
};

exports.createHistory = async historyData => {
  const history = new History(historyData);
  try {
    return await history.save();
  } catch (e) {
    console.error("unable to create user history");
    throw e;
  }
};
