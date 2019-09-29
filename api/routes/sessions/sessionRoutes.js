"use strict";

const express = require("express");
const router = express.Router();
const { listSessions, createSession } = require("./sessionService");
const requireAuth = require("../../middleware/requireAuth");

// GET /session
router.route("/").get(requireAuth, async (req, res, next) => {
  try {
    const sessions = await listSessions();
    res.status(200).send({
      data: sessions
    });
  } catch (e) {
    next(e);
  }
});

// Post Sessions
router.route("/").post(requireAuth, async (req, res, next) => {
  try {
    const session = await createSession(req.body.data);
    res.status(201).send({
      data: session
    });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
