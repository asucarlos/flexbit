"use strict";

const express = require("express");
const router = express();
const { listCategory, createCategory } = require("./categoryService");

// GET Categories
router.route("/").get(async (req, res, next) => {
  try {
    const category = await listCategory();
    res.status(200).send({
      data: category
    });
  } catch (e) {
    console.error(`An error has occured: ${e}`);
    next(e);
  }
});

// Post Categories
router.route("/").post(async (req, res, next) => {
  try {
    const category = await createCategory(req.body.data);
    res.status(201).send({
      data: category
    });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
