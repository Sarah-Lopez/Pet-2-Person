import React, { Component } from "react";
import Log from "../../components/Login/index"
import Auth from "../../components/Login/Auth"



class login extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
        // We don't have a dashboard.js to save the history to. I kept it just as a placeholder
    }


    render() {
        return (
         <div>Feature comming soon!!
             <Auth />
            <Log handleSuccessfulAuth={this.handleSuccessfulAuth} />    
         </div>
        );
      }
} 

export default login;