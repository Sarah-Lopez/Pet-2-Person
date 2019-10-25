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
                <h1>Small n' furry</h1>
            </Hero>

            <Container Style={{ marginTop: 30 }}>
            <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Top types of small n furry:
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                Small rodent animals have a long history of domestication and are known for being calm and tame. This is a good pet for children as they stay in an enclosure. Kids can learn responsibility by helping with their care such as feeding and cleaning. It is important to do research on rodent pets as some are social and some prefer to live alone. These little creatures are low maintenance and an ideal fit for a pet if you live in an apartment or small home. 
                </Col>
             <Col size="md-4">        
                <li>
                ♥ Hamster
                </li>
                <li>
                ♥ Gerbil
                </li>
                <li>
                ♥ Mouse
                </li>
                <li>
                ♥ Rats
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

            </Container>
        </div>        );
      }
}

export default smallnfurry;