import React from "react";
import Row from "../row";
import Col from "../col";
import "./footer.css";
import { cpus } from "os";

function Footer() {
  return (

    <footer className="footer-main">

      <Row><Col size="lg-12" /><br></br></Row>
      <Row >
        <Col size="md-12"> <h5>Authors</h5> </Col>
      </Row>

      <div className="footer-items">
        <Row >
          <Col size="md-1" />
          {/* ------------ Sarah ------------ */}
          <Col size="md-2">
            <ul>
              <li>
                Sarah Lopez
          </li>
            </ul>
            <Row >
              <Col size="md-2">
                <li>
                  <a href="https://www.linkedin.com/in/sarah-anne-lopez/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://sarah-lopez.github.io/Professional-Portfolio/index.html">
                    <i className="fa fa-suitcase"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://github.com/Sarah-Lopez">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </Col>
            </Row>
          </Col>
          {/* ------------ Nicole ------------ */}

          <Col size="md-2">
            <ul>
              <li>
                Nicole Quintero
          </li>
            </ul>
            <Row >
              <Col size="md-2">
                <li>
                  <a href="https://www.linkedin.com/in/knicolequintero/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://nicolequintero7.github.io/Updated-Portfolio-Page/">
                    <i className="fa fa-suitcase"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://github.com/nicolequintero7">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </Col>
            </Row>
          </Col>

          <Col size="md-2" />

          {/* ------------ Marco ------------ */}

          <Col size="md-2">
            <ul>
              <li>
                Marco Angel
          </li>
            </ul>
            <Row >
              <Col size="md-2">
                <li>
                  <a href="https://www.linkedin.com/in/marco-angel-37347b184/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://angel2367716.github.io/Portfolio/">
                    <i className="fa fa-suitcase"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://github.com/Angel2367716">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </Col>
            </Row>
          </Col>

          {/* ------------ ChaA'llisa ------------ */}
          <Col size="md-2">
            <ul>
              <li>
                ChaA'llisa Taylor
          </li>
            </ul>
            <Row >
              <Col size="md-2">
                <li>
                  <a href="https://www.linkedin.com/in/chaa-llisa-taylor-50bba5183/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://chaallisat.github.io/">
                    <i className="fa fa-suitcase"></i>
                  </a>
                </li>
              </Col>
              <Col size="md-2">
                <li>
                  <a href="https://github.com/chaallisat">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </Col>
            </Row>
          </Col>
          <Col size="md-1" />
        </Row>
        <Row><Col size="lg-12" /><br></br></Row>
        <Row>
          <Col size="lg-12">
            <i className="fa fa-copyright">2019 Pet2Person </i>
          </Col>
        </Row>
        <Row><Col size="lg-12" /><br></br></Row>

      </div>


    </footer>
  );
}
export default Footer;