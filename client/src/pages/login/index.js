import React, { Component } from "react";
import Log from "../../components/Login/index"
import Auth from "../../components/Login/Auth"
import Row from "../../components/row";
import Col from "../../components/col";
import Hero from "../../components/hero";
import Container from "../../components/container";





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
       <div>
      <Hero backgroundImage="https://i.imgur.com/xAydj73.jpg">
          <h1>Log in or Sign Up</h1>
      </Hero>

      <Container Style={{ marginTop: 30 }}>
       <Row>
       <Col size="md-8">
       
       </Col>
       <Col size="md-4">
       
      
       </Col>
   </Row>
   <Row>
           <Col size="md-8">

           </Col>
        <Col size="md-4">
           
           </Col>
  </Row>

  <div>Clicking the login button in the navbar should direct 
        you back to the welcome page
        <Auth />
        <Log handleSuccessfulAuth={this.handleSuccessfulAuth} />    
         </div>

       </Container>


       

{/* // render() {
 return ( */}
 {/* <div> */}



   </div>        );
 }
}


      

export default login;