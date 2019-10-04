import React, { Component } from "react";
// import axios from "axios";

class ExerciseForm extends Component {
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => {
    // add a new component that reflects the exercise selected
  };

  render() {
    const exerciseList = this.props.exerciseList;
    return (
      <form className="notification" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Exercise</label>
          <p className="control has-icons-left">
            <span className="select">
              <select>
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
          <label className="label">Reps</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              placeholder="3"
              min="0"
              max="50"
            />
            <span className="icon is-left">
              <i className="fas fa-redo-alt"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Weight</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="number"
              placeholder="20"
              min="0"
              max="500"
            />
            <span className="icon is-left">
              <i className="fas fa-weight-hanging"></i>
            </span>
          </div>
        </div>
        <p className="control">
          <button className="button is-primary" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </p>
      </form>
    );
  }
}

export default ExerciseForm;
