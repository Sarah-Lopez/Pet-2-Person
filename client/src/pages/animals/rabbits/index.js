import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
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

        <p>
        ♥ fluffy
        </p>
        <p>
        ♥ short tails
        </p>
        <p>
        ♥ whiskers
        </p>
        <p>
        ♥ distinctive long ears
        </p>

        <p>
        If you love cuddly creatures then this may be the soul mate for you!
        </p>

        <p>
        Rabbits can live in many different environments. They come in a variety of sizes which can range from around 1LB to 10LBs.
        </p>

        <p>
        You may be a good match for this little creature if you enjoy a plant-based diet and are social! Rabbits enjoy a varity of vegtables and fruit. They enjoy living in large colonies.
        </p>

        <p>
        Please see below for adorable rabbits in your area to adopt!
         </p>
         
                    </Row>
                </Container>
            </div>);
    }
}

export default rabbits;