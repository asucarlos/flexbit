import React, { Component } from "react";
import ExerciseForm from "../ExerciseForm";
import WelcomeSection from "../WelcomeSection/";

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        {this.props.user ? <ExerciseForm /> : <WelcomeSection />}
      </div>
    );
  }
}

export default Homepage;
