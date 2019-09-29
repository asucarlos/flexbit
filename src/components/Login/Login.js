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

    return <div>Login</div>;
  }
}

export default Login;
