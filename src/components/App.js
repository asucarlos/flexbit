import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ExerciseList from './ExerciseList'
import Exercise from './Exercise'
import Homepage from './Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router> 
        <Switch> 
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/exerciselist' component={ExerciseList}/>
          <Route path='/exerciselist/:exercise' component={Exercise}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
