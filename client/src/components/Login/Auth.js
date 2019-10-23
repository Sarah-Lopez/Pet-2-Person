import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            password_confirmation: "",
            authErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // console.log("handle change", event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("form submit");
        axios.post("http://localhost:3001/signup", {
            user: {
                username: this.state.username,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        },
        {withCredentials: true}
        )
        .then(res => {
            console.log("Auth response", res);
        })
        .catch(error => {
            console.log("Auth error", error);
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

                    <input 
                      type="password"
                      name="password_confirmation"
                      placeholder="Password Confirmation"
                      value={this.state.password_confirmation}
                      onChange={this.handleChange}
                      required
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}