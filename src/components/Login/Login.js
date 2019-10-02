import React, { Component } from "react";
import axios from "axios";
import { Wrapper, Container } from "./styles";
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
    const { type } = this.state;

    return (
      <Wrapper className="container notification">
        <Container>
          <button className="button is-primary" active={type === 'Login'} onClick={() => this.changeForm('Login')}>
            Login
          </button>
          <button className="button is-primary" active={type === 'Sign up'} onClick={() => this.changeForm('Sign up')}>
            Sign up
          </button>
          <form onSubmit={this.handleSubmit}>
            <p>
              You'll need to login to continue
            </p>
            <input spaced name="email" type="email" placeholder="YourEmail@email.com" onChange={this.handleChange} />
            <input spaced name="password" type="password" placeholder="password" onChange={this.handleChange} />
            <div>
              <button className="button is-primary" type="submit">{type}</button>
              <button className="button is-primary" onClick={this.props.hideLogin}>Cancel</button>
            </div>
          </form>
        </Container>
      </Wrapper>
    );
  }
}

export default Login;
