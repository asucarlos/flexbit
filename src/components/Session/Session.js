import React from "react";
import Exercise from "../Exercise";
import Calculator from "../Calculator"

const Session = ({ exerciseList}) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      return <Exercise key={i} exercise={exercise} />;
    });
  };

  const saveSession = () => {
    console.log(exerciseList);
  };

  return (
    <section className="box">
      <h1 className="title is-1">Today's Workout</h1>
      <Calculator exerciseList={exerciseList}/>
      <ul>{exerciseEl(exerciseList)}</ul>
      <button
        onClick={saveSession()}
        className="button is-fullwidth is-3 is-success is-large"
      >
        Lets Go!
      </button>
    </section>
  );
};

export default Session;
