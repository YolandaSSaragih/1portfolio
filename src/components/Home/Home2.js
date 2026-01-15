import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an Information Systems student with a strong interest in
              <b className="purple"> building and developing websites </b>
              as a Fullstack Developer. I enjoy turning ideas and system
              requirements into functional web applications.

              <br />
              <br />
              I’m familiar with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React, and basic backend development{" "}
                </b>
              </i>
              to create responsive and user-friendly websites.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  web applications, frontend interfaces, and backend integration{" "}
                </b>
              </i>
              that work seamlessly and efficiently.
              <br />
              <br />
              Whenever possible, I enjoy building projects with
              <b className="purple"> Laravel, JavaScript </b> and modern framework such as{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              , while continuously learning backend technologies to build functional and
user-friendly web applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
