import React, { Component } from "react";
// import Log from "../../components/Login/index"
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

                <Container style={{ marginTop: 30 }}>
                    <Row>
                        <Col size="md-3" />
                        <Col size="md-6">
                            <div>Feature comming soon!!
                            <Auth />
                                {/* <Log handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
                            </div>
                        </Col>
                        <Col size="md-3" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default login;