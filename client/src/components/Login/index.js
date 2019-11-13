// import React from "./node_modules/react";
import React, { Component } from "react";
import axios from "axios";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export default class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    axios
      .post(
        "http://localhost:3001/login", {
        username: username,
        password: password
      },
        { withCredentials: true }
      )
      .then(response => {
        console.log("res from login", response);
        if (response.status === 200) {
          // this.props.handleSuccessfulAuth(response.data);
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          this.setState({
            redirectTo: '/'
          })
        }
      })
      .catch(error => {
        console.log("login comp error", error);

      });
    event.preventDefault();
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

      </div>
    );
  }
} 