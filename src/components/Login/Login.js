import React, { Component } from "react";
import axios from "axios";
import { setToken } from "../../services/tokenService";

class Login extends Component {
  state = {
    type: "login",
    message: null
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password, type } = this.state;
    const route = type === "login" ? "login" : "signup";

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
    const { type } = this.state;

    return (
      <div className="container notification">
        <div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" active={type === 'login'} onClick={() => this.changeForm('Login')}>
                Login
              </button>
            </div>
            <div className="control">
              <button className="button is-primary" active={type === 'signup'} onClick={() => this.changeForm('Sign up')}>
                Sign up
              </button>
            </div>
          </div>
          <div className="field" onSubmit={this.handleSubmit}>
            <p className="control">
              You'll need to login to continue
            </p>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" spaced name="email" type="email" placeholder="example@email.com" onChange={this.handleChange} />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" spaced name="password" type="password" placeholder="Password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit">{type}</button>
              </div>
              <div className="control">
                <button className="button is-primary" onClick={this.props.hideLogin}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
