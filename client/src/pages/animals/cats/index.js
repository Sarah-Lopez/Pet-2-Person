import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";

class cats extends Component {
    render() {
        return (
<div>
            <Hero backgroundImage="https://i.imgur.com/w1pcCMG.jpg">
                <h1>Cats </h1>
            </Hero>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to Pet 2 Person</h1>
                    </Col>
                </Row>
                <Row>
                <p>
Physical Features:
</p>
<p>
♥ 40 different breeds
</p>
<p>
♥ most have longs tails
</p>
<p>
♥ whiskers
</p>
<p>
♥ sharp claws
</p>
<p>
If you are a night owl, a cat may be a good fit to keep you company! Cats are most active during the dawn and twilight hours. This is known as their hunting hours. 
</p>
<p>
Other than their ability to stay awake with you for the night hours, cats sleep a lot! Typically, they sleep about 15 hours a day. Making the perfect nap buddy. 
</p>
<p>
A cat’s vision and hearing are better than dogs. 
</p>
<p>
Cats are true carnivores and require a high protein diet. 
</p>
<p>
Please see below for adorable cats in your area to adopt!
 </p>

 
 <div class="react-form-container"></div>

 
                    </Row>
                </Container>
            </div>);



    }
}






export default cats;



