import React from "react";
import Exercise from "../Exercise";
import { getToken } from "../../services/tokenService";

const Session = ({ exerciseList }) => {
  const exerciseEl = exerciseList => {
    return exerciseList.map((exercise, i) => {
      return <Exercise key={i} exercise={exercise} canDelete={true} />;
    });
  };

  const saveSession = async () => {
    try {
      console.log(exerciseList);
      const session = await Axios.post(`/api/sessions`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        body: {
          exercises: exerciseList,
          date: Date.now()
        }
      });
      console.log(session);
    } catch (e) {
      console.error(e.message);
    }
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
