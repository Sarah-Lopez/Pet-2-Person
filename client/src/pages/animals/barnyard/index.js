import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import Form from "../../../components/form";

class barnyard extends Component {
    render() {
        return (
          <div>
          <Hero backgroundImage="https://i.imgur.com/tTqkWSl.jpg">
              <h1>Barnyard </h1>
          </Hero>

          <Container style={{ marginTop: 30 }}>
              <Row>
                  <Col size="md-12">
                      <h1>Welcome to Pet 2 Person</h1>
                  </Col>
              </Row>
              <Row>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                  </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                  </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                  </p>
              </Row>
              <Row>
                    <Col size="md-12">
                      <Form />
                    </Col>  
                </Row>
                <Row>
                    <Col size ="4" />
                    <Col size="4">
                    <p>Content can go here</p>
                    </Col>
                    <Col size ="4" />
                </Row>
          </Container>
      </div>
        );
      }
}

export default barnyard;