import React from "react";
import Exercise from "../Exercise";
import TimeParser from "../../helper/TimeParser"

const Session = ({ exerciseList, estimateTime }) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      console.log(exercise);
      return <Exercise key={i} exercise={exercise} />;
    });
  };

  return (
    <section className="box">
      <h1 className="title is-1">Today's Workout</h1>
      <h5 className="title is-5">Estimated Duration: {TimeParser(estimateTime)}</h5>
      <ul>{exerciseEl(exerciseList)}</ul>
    </section>
  );
};

export default Session;
