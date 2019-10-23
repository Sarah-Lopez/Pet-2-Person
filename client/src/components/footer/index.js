import React from "react";
import Row from "../row";
import Col from "../col";
import "./footer.css";
import { cpus } from "os";

function Footer() {
    return (

<footer className="footer-main">


<Row >
  <Col size="md-4" />
  <Col size="md-4" >Contact Us</Col>
  <Col size="md-4" />
</Row>

  <div className="footer-items">
{/* NAMES */}
      <Row >
      <Col size="md-2" />
      <Col size="md-2">
        <ul>
          <li>
            Sarah Lopez
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
            Nicole Quintero
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          Marco Angel
          </li>
        </ul>
          </Col>
          
          <Col size="md-2">
        <ul>
          <li>
            ChaA'llisa Taylor
          </li>
        </ul>
          </Col>
          <Col size="md-2" />
      </Row>



      {/* LINKEDIN  */}
      <Row >
      <Col size="md-2" />
      <Col size="md-2">
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/sarah-anne-lopez/">Linkedin</a> 
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/knicolequintero/">Linkedin</a>
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/marco-angel-37347b184/">Linkedin</a>
          </li>
        </ul>
          </Col>
          
          <Col size="md-2">
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/chaa-llisa-taylor-50bba5183/">Linkedin</a>
          </li>
        </ul>
          </Col>
          <Col size="md-2" />
      </Row>



      {/* PORTFOLIOS */}
      <Row >
      <Col size="md-2" />
      <Col size="md-2">
        <ul>
          <li>
          <a href="https://sarah-lopez.github.io/Professional-Portfolio/index.html">Portfolio</a>          
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://nicolequintero7.github.io/Updated-Portfolio-Page/">Portfolio</a>
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://angel2367716.github.io/Portfolio/">Portfolio</a>
          </li>
        </ul>
          </Col>
          
          <Col size="md-2">
        <ul>
          <li>
          <a href="https://chaallisat.github.io/">Portfolio</a>
          </li>
        </ul>
          </Col>
          <Col size="md-2" />
      </Row>

      {/* Github */}
      <Row >
      <Col size="md-2" />

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://github.com/Sarah-Lopez">Repo</a>
          </li>
        </ul>
          </Col>

          <Col size="md-2">
        <ul>
          <li>
          <a href="https://github.com/nicolequintero7">Repo</a>
          </li>
        </ul>
          </Col>
      <Col size="md-2">
        <ul>
          <li>
          <a href="https://github.com/Angel2367716">Repo</a> 
          </li>
        </ul>
          </Col>
          
          <Col size="md-2">
        <ul>
          <li>
          <a href="https://github.com/chaallisat">Repo</a>
          </li>
        </ul>
          </Col>
          <Col size="md-2" />
      </Row>
  </div>
 

</footer>



      //   <footer>
      //  <span classNameName="font-brand">Pet2Person 2019</span>
       
      // </footer>
    );
  }
export default Footer;