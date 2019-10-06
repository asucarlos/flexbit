import React from "react";
import Exercise from "../Exercise";
import Calculator from "../Calculator"

const Session = ({ exerciseList}) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      return <Exercise key={i} exercise={exercise} />;
    });
  };

  return (
    <section className="box">
      <h1 className="title is-1">Today's Workout</h1>
      <Calculator exerciseList={exerciseList}/>
      <ul>{exerciseEl(exerciseList)}</ul>
    </section>
  );
};

export default Session;
