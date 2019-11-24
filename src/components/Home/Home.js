import React, { Component } from "react";
import ExerciseForm from "../ExerciseForm";
import WelcomeSection from "../WelcomeSection/";
import Session from "../Session/";

class Homepage extends Component {
  state = {
    exerciseSelected: "",
    reps: 0,
    sets: 0,
    weight: 0,
    restTime: 0,
    session: []
    // for development so you don't have to fill in the form everytime
    // session: [
    //   {
    //     name: "one",
    //     reps: "8",
    //     restTime: "6",
    //     sets: 3,
    //     weight: 5
    //   },
    //   {
    //     name: "two",
    //     reps: "8",
    //     restTime: "6",
    //     sets: 6,
    //     weight: 7
    //   },
    //   {
    //     name: "override",
    //     reps: "8",
    //     restTime: "6",
    //     sets: 3,
    //     weight: 4
    //   }
    // ]
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
      name: this.state.exerciseSelected,
      reps: this.state.reps,
      sets: this.state.sets,
      weight: this.state.weight,
      restTime: this.state.restTime
    };

    const newSession = [...this.state.session];
    newSession.push(exerciseObj);

    this.setState({
      session: newSession,
      // exerciseSelected: this.props.exerciseList[0]["name"]
    });

    document.getElementById("exercise-form").reset();
  };

  resetSubmit = () => this.setState({ submitted: false });

  render() {
    return (
      <div className="container">
        {this.props.user ? (
          <>
            {this.state.session.length > 0 ? (
              <Session 
                exerciseList={this.state.session}
              />
            ) : null}
            <ExerciseForm
              exerciseList={this.props.exerciseList}
              setInitialExercise={this.setInitialExercise}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </>
        ) : (
          <WelcomeSection />
        )}
      </div>
    );
  }
}

export default Homepage;
