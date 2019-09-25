"use strict";

const Session = require('./sessionModel');

exports.listSessions = async () => {
  try {
    const session = Session.find({});
    return session;
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