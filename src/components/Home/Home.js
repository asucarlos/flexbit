import React, { Component } from "react";
import ExerciseForm from "../ExerciseForm";
import WelcomeSection from "../WelcomeSection/";

class Homepage extends Component {
  // welcomeSection = (
  //   <div className="notification">
  //     <h1 className="is-size-1 has-text-centered">Welcome to Flexbit!</h1>
  //     <h3 className="is-size-3 has-text-centered">
  //       Your personal workout tracker login to get started!
  //     </h3>
  //     <div className="columns is-vcentered .is-centered">
  //       <figure className="column">
  //         <Image className="image" src={giphy} alt="Veggies working out" />
  //       </figure>
  //     </div>
  //   </div>
  // );

  render() {
    console.log(this.props.user);
    return (
      <div className="container">
        {this.props.user ? <ExerciseForm /> : <WelcomeSection />}
      </div>
    );
  }
}

export default Homepage;
