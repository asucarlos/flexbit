import React, { Component } from "react";
import ExerciseForm from "../ExerciseForm";
import WelcomeSection from "../WelcomeSection/";

class Homepage extends Component {
  state = {
    exerciseSelected: "",
    reps: 0,
    weight: 0,
    session: []
  };

  handleChange = e => {
    if (this.props.exerciseList[0] && this.state.exerciseSelected === "") {
      this.setState({
        exerciseSelected: this.props.exerciseList[0]["name"]
      });
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const exerciseObj = {
      exerciseName: this.state.exerciseSelected,
      reps: this.state.reps,
      weight: this.state.weight
    };

    const newSession = [...this.state.session];
    newSession.push(exerciseObj);

    this.setState({
      session: newSession,
      exerciseSelected: this.props.exerciseList[0]["name"],
      reps: 0,
      weight: 0
    });

    document.getElementById("exercise-form").reset();
  };

  resetSubmit = () => this.setState({ submitted: false });

  render() {
    return (
      <div className="container">
        {this.props.user ? (
          <ExerciseForm
            exerciseList={this.props.exerciseList}
            setInitialExercise={this.setInitialExercise}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <WelcomeSection />
        )}
      </div>
    );
  }
}

export default Homepage;
