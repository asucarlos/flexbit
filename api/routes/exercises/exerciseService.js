"use strict";

const Exercise = require("./exerciseModel");

// Helper function to list each of the books in the database
exports.listExercises = async () => {
  try {
    const exercise = Exercise.find({});
    return exercise;
  } catch (e) {
    throw e;
  }
};

// Create a new exercise that will be added to the database
exports.createExercise = async exerciseData => {
  // 1. Create a exercise instance
  const exercise = new Exercise(exerciseData);
  try {
    // 2. Save exercise to database
    const doc = await exercise.save();
    // 3. return with created exercise
    return doc;
  } catch (e) {
    // 4. If error, throw and controller will catch
    throw e;
  }
};
