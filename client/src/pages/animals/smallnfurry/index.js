import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import Form from "../../../components/form";

class smallnfurry extends Component {
    render() {
        return (
<div>
            <Hero backgroundImage="https://i.imgur.com/HtsoNY8.jpg">
                <h1>Smallnfurry</h1>
            </Hero>

            <Container Style={{ marginTop: 30 }}>
            <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Features
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                If you love cuddly creatures then this may be the soul mate for you!                
                Rabbits can live in many different environments. They come in a variety of sizes which can range from around 1LB to 10LBs.                
                You may be a good match for this little creature if you enjoy a plant-based diet and are social! Rabbits enjoy a varity of vegtables and fruit. They enjoy living in large colonies.
                </Col>
             <Col size="md-4">        
                <li>
                ♥ fluffy
                </li>
                <li>
                ♥ short tails
                </li>
                <li>
                ♥ whiskers
                </li>
                <li>
                ♥ distinctive long ears
                </li>
                </Col>
       </Row>

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
        </div>        );
      }
}

export default smallnfurry;