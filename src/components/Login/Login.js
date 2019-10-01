import React, { Component } from "react";
import axios from "axios";
import { setToken } from "../../services/tokenService";

class Login extends Component {
  state = {
    type: "Login",
    message: null
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, type } = this.state;
    const route = type === "Login" ? "Login" : "Sign up";

    try {
      const res = await axios.post(`/api/users/${route}`, {
        data: {
          email: email,
          password: password
        }
      });
      console.log(res);
      const token = res.data.data.token;
      setToken(token);
      this.props.hideLogin();
    } catch (e) {
      this.setState({ message: e });
      console.log(e);
    }
  };

  changeForm = type => {
    this.setState({ type: type });
  };

  render() {
    // const { type } = this.state;

    return (
      <div>
        <button active={type === 'Login'} onClick={() => this.changeForm('Login')}>
          Login
        </button>
        <button active={type === 'Sign up'} onClick={() => this.changeForm('Sign up')}>
          Sign up
        </button>
        <form onSubmit={this.handleSubmit}>
          <h3>
            You'll need to login to continue
          </h3>
          <input spaced name="email" type="email" placeholder="email" onChange={this.handleChange} />
          <input spaced name="password" type="password" placeholder="password" onChange={this.handleChange} />
          <div>
            <button type="submit">{type}</button>
            <button small onClick={this.props.hideLogin}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
