import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Pet from "../../components/Pet";

function Rabbits(){
    return (
        <div>
            <Pet backgroundImage="https://i.imgur.com/qVAm0UQ.jpg">
                <h1>Rabbits </h1>
            </Pet>

            <Container Style={{ marginTop: 30 }}>
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
            </Container>
        </div>
    );
}

export default Rabbits;