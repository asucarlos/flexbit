import React, { Component } from "react";
// import axios from "axios";

class Session extends Component {
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form className="notification">
        <div className="field">
          <label class="label">Exercise</label>
          <p className="control has-icons-left">
            <span className="select">
              <select>
                <option selected>Bench Press</option>
                <option>Push up</option>
                <option>Leg Press</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i class="fas fa-dumbbell"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Reps</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="3"
              min="0"
              max="50"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope fa-xs"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check fa-xs"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Weight</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="20"
              min="0"
              max="500"
            />
            <span class="icon is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
}

export default Session;
