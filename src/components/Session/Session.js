import React from "react";
import Exercise from "../Exercise";

const Session = ({ exerciseList }) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      console.log(exercise);
      return <Exercise key={i} exercise={exercise} />;
    });
  };

  return (
    <section className="box">
      <h1 className="title">Today's Workout</h1>
      <ul>{exerciseEl(exerciseList)}</ul>
    </section>
  );
};

export default Session;
