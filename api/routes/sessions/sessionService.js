"use strict";

const Session = require("./sessionModel");

exports.listSessions = async () => {
  try {
    const session = Session.find({});
    return session;
  } catch (e) {
    throw e;
  }
};

exports.createSession = async (sessionData, user) => {
  // manipulate sessionData to add the user id off req.user
  const _userId = user.user.id;
  const sessionWithUser = { ...sessionData, _userId };
  const session = new Session(sessionWithUser);
  try {
    return await session.save();
  } catch (e) {
    throw e;
  }
};
