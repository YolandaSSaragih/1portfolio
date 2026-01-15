import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import kerjku from "../../Assets/Projects/chatify.png";
import ladangqu from "../../Assets/Projects/ladangqu.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kerjaku from "../../Assets/Projects/kerjaku.png";
import rapidminer from "../../Assets/Projects/rapidminer.png";
import Rumahkreatif from "../../Assets/Projects/Rumahkreatif.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ladangqu}
              isBlog={false}
              title="LadangQu"
              description="A fullstack web platform designed to support agricultural communities.
  I developed responsive user interfaces using React, implemented backend services
  for data management, and integrated a database to handle user and product data.
  This project focuses on clean UI, efficient data flow, and scalable system design."
              ghLink="https://github.com/JopelSimarmata/Website_Pertanian"
              demoLink="https://jopel.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapidminer}
              isBlog={false}
              title="Diabetes Risk Prediction System"
              description="A fullstack data-driven web application for early diabetes risk prediction.
  I handled data preprocessing and analysis, built a prediction model, and integrated
  the model into a web interface to display results interactively.
  The system demonstrates backend logic, data processing, and frontend visualization."
              
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rumahkreatif}
              isBlog={false}
              title="E-Commerce Website Rumah Kreatif Toba"
              description="Designed an e-commerce web interface using Figma to promote local Toba products. Created user flows, wireframes, and high-fidelity UI designs focusing on clear navigation, category browsing, product discovery, and a smooth shopping experience."
              demoLink="https://www.figma.com/proto/WVp99XnMQOwyAdqFIipFeE/Full-E-Commerce-Website-UI-UX-Design--Community-?node-id=34-213&starting-point-node-id=34%3A213&t=MzhXjI8nkqMvJKq7-1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kerjaku}
              isBlog={false}
              title="Kerjaku"
              description="Designed user interfaces and system flows using Figma based on functional and business requirements. Created wireframes, user flows, and high-fidelity prototypes to ensure clear navigation, usability, and alignment with system objectives."
              demoLink="https://www.figma.com/proto/g32W9LOkkfdYVsQZZfaKvy/Demo-KerjaKu?node-id=384-2963&t=QJWXZ8va4B7dsgc1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=275%3A1814&show-proto-sidebar=1" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
