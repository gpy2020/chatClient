import React, { Component } from "react";
import Login from "../../components/Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      username: "",
      password: ""
    };
  }

  handleUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeTabs = event => {
    if (+event.target.value !== this.state.currentTab) {
      this.setState({ currentTab: +event.target.value });
    }
  };

  submitRegister = () => {
    console.log("server request: registration");
  };

  submitLogin = () => {
    console.log("server request: login");
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.state.currentTab === 0 ? this.submitLogin() : this.submitRegister();
  };

  render() {
    return (
      <Login
        username={this.state.username}
        password={this.state.password}
        onChange={this.handleUserInput}
        handleChangeTabs={this.handleChangeTabs}
        currentTab={this.state.currentTab}
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }
}

export default LoginContainer;
