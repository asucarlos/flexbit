import React, { Component } from "react";
// import axios from "axios";
// import Exercise from "../Exercise";

class ExerciseForm extends Component {
  // handleStart = async e => {
  //   e.preventDefault();
  //   const { exerciseSelected, reps, weight } = this.state;
  //   console.log(exerciseSelected, reps, weight);
  //   try {
  //     // post the session to the db
  //     const res = await axios.post(`/api/sessions/`, {
  //       data: {
  //         exercises: []
  //       }
  //     });

  //     // we might not need to do that?

  //     // do a get request to get the exercises used this this session
  //     // also send the token with the request
  //     // set state with this session
  //     // render the session
  //   } catch (e) {
  //     this.setState({ message: e });
  //   }
  // };

  render() {
    const { exerciseList, handleChange, handleSubmit } = this.props;
    return (
      <form id="exercise-form" className="notification" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Exercise</label>
          <p className="control has-icons-left">
            <span className="select">
              <select name="exerciseSelected" onChange={handleChange}>
                {exerciseList
                  ? exerciseList.map((exercise, i) => (
                      <option key={i}>{exercise.name}</option>
                    ))
                  : null}
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-dumbbell"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label name="reps" className="label">
            Reps
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="reps"
              type="number"
              placeholder="8"
              min="0"
              onChange={handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-redo-alt"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label name="sets" className="label">
            Sets
          </label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="sets"
              type="number"
              placeholder="3"
              min="0"
              onChange={handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-redo-alt"></i>
            </span>
          </div>
        </div>
        <label name="weight" className="label">
          Weight
        </label>
        <div className="field has-addons">
          <p className="control has-icons-left">
            <input
              className="input"
              name="weight"
              type="number"
              placeholder="20"
              min="0"
              onChange={handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-weight-hanging"></i>
            </span>
          </p>
          <p className="control">
            <span className="button is-static">lbs</span>
          </p>
        </div>
        <label name="restTime" className="label">
          Rest Time
        </label>
        <div className="field has-addons">
          <p className="control has-icons-left">
            <input
              className="input"
              name="restTime"
              type="number"
              placeholder="60"
              min="0"
              onChange={handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-stopwatch"></i>
            </span>
          </p>
          <p className="control">
            <span className="button is-static">Sec</span>
          </p>
        </div>
        <p className="control">
          <button
            className="button is-primary is-fullwidth"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </p>
      </form>
    );
  }
}

export default ExerciseForm;
