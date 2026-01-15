import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Yolanda Septania Saragih</span>, an
            Information Systems student with a strong interest in
            <span className="purple"> building and developing websites</span>.
            I am passionate about creating functional web applications by
            combining clean frontend interfaces with efficient backend logic.
            <br />
            <br />
            I enjoy working with web technologies and have experience using
            <span className="purple">
              {" "}
              HTML, CSS, JavaScript, React, and basic backend development{" "}
            </span>
            to build responsive and user-friendly websites.
            <br />
            <br />
            I am continuously learning to improve my skills in fullstack web
            development and enjoy collaborating in team environments to deliver
            meaningful digital solutions.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Frontend & Backend Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Web Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Learning by building, growing by creating.”
          </p>
          <footer className="blockquote-footer">Yolanda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
