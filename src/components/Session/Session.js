import React from "react";
import Exercise from "../Exercise";

const Session = ({ exerciseList }) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      return <Exercise key={i} exercise={exercise} canDelete={true} />;
    });
  };

  const saveSession = () => {
    console.log(exerciseList);
  };

  return (
    <section className="box">
      <h1 className="title">Today's Workout</h1>
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
