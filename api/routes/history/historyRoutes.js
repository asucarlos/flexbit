"use strict";

const express = require("express");
const router = express.Router();
const { listHistory, createHistory } = require("./historyService");
const requireAuth = require("../../middleware/requireAuth");

router.route("/").get(requireAuth, async (req, res, next) => {
  try {
    const history = await listHistory();
    res.status(200).send({
      data: history
    });
  } catch (e) {
    console.error(`An error has occured: ${e}`);
    next(e);
  }
});

router.route("/").post(requireAuth, async (req, res, next) => {
  try {
    const history = await createHistory(req.body.data);
    res.status(201).send({
      data: history
    });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
