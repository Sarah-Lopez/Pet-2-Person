import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Pet from "../../components/Pet";

function About(){
    return(
        <div>
            <Pet backgroundImage = "https://i.imgur.com/23GwHha.jpg">
            {/* <Bunny backgroundImage = "https://i.imgur.com/2arrFe4.jpg"> */}
                <h1>Pet 2 Person </h1>
                <h2>“Adopted pets are the best pets you can have. Most adoptable pets come from loving homes that simply cannot care for them anymore. Or they are strays who’ve been on their own without the loving care they deserve.” Josh Duhamel, American Actor</h2>
            </Pet>

            <Container Style={{ marginTop: 30}}>
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
    )
}
export default About;