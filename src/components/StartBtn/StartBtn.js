import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../../services/tokenService";

const headers = {
  Authorization: `Bearer ${getToken()}`
};

class StartBtn extends Component {
  saveSession = async () => {
    try {
      const sessionSaved = await axios.post(
        `/api/sessions`,
        {
          data: {
            exercises: this.props.exerciseList,
            date: Date.now()
          }
        },
        {
          headers: headers
        }
      );

      console.log(sessionSaved);
    } catch (e) {
      console.error(e.message);
    }
  };

  render() {
    return (
      <button
        onClick={this.saveSession}
        className="button is-fullwidth is-3 is-success is-large"
      >
        Lets Go!
      </button>
    );
  }
}

export default StartBtn;
