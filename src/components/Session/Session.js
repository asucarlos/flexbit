import React from "react";
import Exercise from "../Exercise";
import StartBtn from "../StartBtn";

const Session = ({ exerciseList }) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      return <Exercise key={i} exercise={exercise} canDelete={true} />;
    });
  };

  return (
    <section className="box">
      <h1 className="title">Today's Workout</h1>
      <ul>{exerciseEl(exerciseList)}</ul>
      <StartBtn exerciseList={exerciseList} />
    </section>
  );
};

export default Session;
