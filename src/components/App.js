import React, { Component } from "react";
// import logo from './logo.svg';
// import "./App.scss";
import Nav from "./Nav";
import Login from "./Login";
import ExerciseList from "./ExerciseList";
import Exercise from "./Exercise";
import Homepage from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginActive: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleLogin = () =>
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));

  render() {
    return (
      <Router>
        <>
          <Nav
            user={this.state.user}
            toggleLogin={this.toggleLogin}
            logout={this.logout}
          />
          {this.state.showLogin && !this.state.user && (
            <Login hideLogin={this.toggleLogin} setUser={this.setUser} />
          )}
          <Switch>
            <Route exact path="/" component={Homepage} user={this.state.user} />
            <Route exact path="/exerciselist" component={ExerciseList} />
            <Route path="/exerciselist/:exercise" component={Exercise} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
