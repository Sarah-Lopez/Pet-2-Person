import React, { Component } from "react";
import {getFromStorage, setInStorage} from "../../utils/storage"
import axios from "axios";

export default class Auth extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          token: '',
          signUpError: '',
          signInError: '',
          signInUsername: '',
          signInPassword: '',
          signUpUsername: '',
          signUpPassword: '',
        };
    
        this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
      }
    
      componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('/api/account/user/verrify?token=' + token)
            .then(res => res.json())
            .then(json => {
              if(json.sucess) {
                this.setState({
                  token,
                  isLoading: false
                })
              } else {
                this.setState({
                  isLoading: false,
                })
              }
            });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }
    
      onTextboxChangeSignInUsername(event) {
        this.setState({
          signInUsername: event.target.value,
        });
      }
    
      onTextboxChangeSignInPassword(event) {
        this.setState({
          signInPassword: event.target.value,
        });
      }
    
      onTextboxChangeSignUpUsername(event) {
        this.setState({
          signUpUsername: event.target.value,
        });
      }
    
      onTextboxChangeSignUpPassword(event) {
        this.setState({
          signUpPassword: event.target.value,
        });
      }
    
    
      onSignUp() {
        //Grab State
        const {
          signUpUsername,
          signUpPassword,
        } = this.setState
    
        this.setState({
          isLoading: true,
        })
        //Post req to backend
        fetch('http://localhost:3001/api/account/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: signUpUsername,
            password: signUpPassword
          })
        })
          .then(res => res.json())
          .then(json => {
            if (json.sucess) {
              this.setState({
                signUpError: json.message,
                isLoading: false,
                signUpUsername: '',
                signUpPassword: '',
              });
            } else {
              this.setState({
                signUpError: json.message,
                isLoading: false,
              });
            }
          });
      }
    
      onSignIn() {
        const {
          signInUsername,
          signInPassword,
        } = this.setState
    
        this.setState({
          isLoading: true,
        })
        //Post req to backend
        fetch('/api/account/user/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: signInUsername,
            password: signInPassword
          })
        })
          .then(res => res.json())
          .then(json => {
            if (json.sucess) {
              setInStorage('the_main_app', { token: json.token });
              this.setState({
                signInError: json.message,
                isLoading: false,
                signInPassword: '',
                signInUsername: '',
                token: json.token
              });
            } else {
              this.setState({
                signInError: json.message,
                isLoading: false,
              });
            }
          });
      }
    
      logout() {
        this.setState({
          isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('/api/account/user/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
              if(json.sucess) {
                this.setState({
                  token: '',
                  isLoading: false
                })
              } else {
                this.setState({
                  isLoading: false,
                })
              }
            });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }
    
      render() {
        const {
          isLoading,
          token,
          signInError,
          signInUsername,
          signInPassword,
          signUpUsername,
          signUpPassword,
          signUpError,
        } = this.state;
    
        if (isLoading) {
          return (<div><p>Loading...</p></div>);
        }
    
        if (!token) {
          return (
            <div>
              {/* <Nav /> */}
              <div className="row">
                {
                  (signInError) ? (
                    <p>{signInError}</p>
                  ) : (null)
                }
                  <p>Sign In</p>
                  <form className="col s12">
    
                    <div className="row">
    
                      <div className="input-field col s6">
                        <input 
                          type="username" 
                          placeholder="Username" 
                          value={signInUsername} 
                          onChange={this.onTextboxChangeSignInUsername}
                          className="validate"
                          id="username"
                        />
    
                        <input 
                          type="password" 
                          placeholder="Password" 
                          value={signInPassword} 
                          onChange={this.onTextboxChangeSignInPassword}
                          className="validate"
                          id="password"
                        />
                      <button onClick={this.onSignIn}>Sign In</button>
    
                      </div>
                    </div>
                  </form>
    
    
              </div>
              <br />
              <br />
              <div>
              {
                  (signUpError) ? (
                    <p>{signUpError}</p>
                  ) : (null)
                }
                  <p>Sign Up</p>
                  <input 
                    type="username" 
                    placeholder="Username" 
                    value={signUpUsername}
                    onChange={this.onTextboxChangeSignUpUsername}
                  /><br />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={signUpPassword}
                    onChange={this.onTextboxChangeSignUpPassword}
                  /><br />
                  <button onClick={this.onSignUp}>Sign Up</button>
              </div>
    
            </div>
          );
        }
        return (
            <div>
              {/* <Nav /> */}
                <h1>Hello World!</h1>
                <h5>This is the Login page.</h5>
                <p>Account</p>
                <button onClick={this.logout}>Logout</button>
            </div>
    
        );
      }
    }