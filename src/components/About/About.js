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
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}> */}
        {/* <Col
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
          I'm <strong className="purple">Abdur Rahman Shaik</strong>, a full-stack
          developer with more than 2 years of experience. My tech stack includes{" "}
          <strong className="purple">
            React.js, Node.js, Django, Spring Boot, JavaScript, Python, JAVA, HTML, and
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
              Developed a <strong className="purple">software-based load balancer</strong> using Java and Socket Programming, implementing the
              Round-Robin algorithm for efficient traffic distribution across multiple servers. Integrated real-time server
              health monitoring to detect failures and reroute traffic dynamically, ensuring high availability and reliability.
            </li>
            <li>
              Created a <strong className="purple">QA Tool</strong> that reduced
              QA efforts by 42%, built with Django and React.
            </li>
            <li>
              Developed and integrated <strong className="purple">module federated applications</strong> by exposing multiple remote apps as child apps
              and seamlessly embedding them as separate React components in the host app using Webpack’s
              module federation.
            </li>
            <li>
              Implemented user-centric features, including dynamic task categorization and priority settings, leveraging
              <strong className="purple">RESTful APIs</strong> for efficient data management and ensuring a streamlined user experience.
            </li>
          </ul>
        </p> */}
        <h1 className="project-heading">
          <strong className="purple">Skills:</strong>
        </h1>
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
