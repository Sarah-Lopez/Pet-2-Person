import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import Form from "../../../components/form";
import "./rstyle.css";


class rabbits extends Component {
    render() {
        return (
            <div>
                <Hero backgroundImage="https://i.imgur.com/fqbSEz4.jpg">
                    <h1>Rabbits</h1>
                </Hero>

                <Container Style={{ marginTop: 30 }}>
                    <Row>
                        <Col size="md-12">
                            <h1 class="h1">Pet 2 Person</h1>
                        </Col>
                    </Row>
                    <Row>
                       
        <p>
        Physical Features:
        </p>

<Row>
<br />
<br />
</Row>

       <Row>
            <Col size="md-6">
                <Form />
            </Col>
           <Col size="md-3" />
            <Col size="md-3" />
        </Row>

        <Row >
            <Col size ="md-4" />
            <Col size="md-4">
            <li>Content can go here</li>
            </Col>
            <Col size ="md-4" />

        </Row>
     </Container>
        </div>);
    }
}

export default rabbits;