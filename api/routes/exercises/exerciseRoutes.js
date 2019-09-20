"use strict";

const express = require("express");
const router = express();
const { listExercises, createExercise } = require("./exerciseService");

// GET /exercise
router.route("/").get(async (req, res, next) => {
  try {
    const exercises = await listExercises();
    res.status(200).send({
      data: exercises
    });
  } catch (e) {
    console.error(`An error has occured: ${e}`);
    next(e);
  }
});

// POST /exercise - after MVP
router.route("/").post(async (req, res, next) => {
  console.log("working 2");
  try {
    const exercise = await createExercise(req.body.data);
    res.status(201).send({
      data: exercise
    });
  } catch (e) {
    next(e);
  }
});

// DELETE /exercise - after MVP

exports.router = router;
