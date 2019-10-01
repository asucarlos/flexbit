import React, { Component } from "react";
import giphy from "../../assets/giphy.gif"
import { Image } from "./styles";


class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      user: false
    }
  }
  welcomeSection = (
    <div className="notification">
      <h1 className="is-size-1 has-text-centered">Welcome to Flexbit!</h1>
      <h3 className="is-size-3 has-text-centered">Your personal workout tracker login to get started!</h3>
      <div className="columns is-vcentered .is-centered">
        <figure className="column">
          <Image className="image" src={giphy} alt="Veggies working out"/>
        </figure>
      </div>
    </div>);

  render(props) {
    return (
      <div className="container">
        {this.state.user ? this.welcomeSection : this.welcomeSection}
      </div>
    );
  }
}

export default Homepage;
