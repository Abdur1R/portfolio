import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <p className="home-about-body">
          I'm <strong className="purple">Mohit Bodhija</strong>, a full-stack
          developer with more than 3 years of experience. My tech stack includes{" "}
          <strong className="purple">
            React.js, Next.js, Django, FastAPI, JavaScript, Python, HTML, and
            CSS
          </strong>
          .
          <br />
          <br />I specialize in{" "}
          <strong className="purple">Component-based Development</strong>,
          having built reusable components like Navbars, Footers, and Forms,
          ensuring maintainability and scalability. I have also integrated
          advanced components like{" "}
          <strong className="purple">
            audio recorders, file-saver functionalities,
          </strong>{" "}
          and <strong className="purple">photo scanners</strong> into React
          applications.
          <br />
          <br />
          Here are some highlights from my work:
          <ul>
            <li>
              Developed a{" "}
              <strong className="purple">Memory-Making Web App</strong> using
              Next.js, Shotstack, Eleven Labs, and AI.
            </li>
            <li>
              Created a <strong className="purple">QA Tool</strong> that reduced
              QA efforts by 42%, built with Django and React.
            </li>
            <li>
              Built a <strong className="purple">JIRA Utility Tool</strong>{" "}
              integrating JIRA REST APIs to automate ticket tracking and improve
              team collaboration.
            </li>
            <li>
              Designed{" "}
              <strong className="purple">Personalized Dashboards</strong> to
              speed up decision-making by 30% using React.
            </li>
          </ul>
        </p>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
