"use strict";

const Session = require('./sessionModel');

exports.listSession = async () => {
  try {
    const session = Session.find({});
    return category;
  } catch (e) {
    throw e;
  }
}

exports.createSession = async sessionData => {
  const session = new Session(sessionData);
  try {
    return await session.save();
  } catch (e) {
    throw e;
  }
}