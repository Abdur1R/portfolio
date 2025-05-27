import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ProfilePic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Hi, I'm <span className="purple">Abdur Rahman Shaik</span>, a
              passionate full-stack developer with over 2 years of experience in
              crafting seamless web experiences.
              <br />
              <br />I am proficient in a variety of technologies, including
              <i>
                <b className="purple">
                  {" "}
                  React.js, Webpack (Module Federation), TypeScript, Node.js, Django, Spring Boot, JavaScript, Python, JAVA, HTML, and
                  CSS
                </b>
              </i>
              <br />
              <br />
              My expertise includes{" "}
              <b className="purple">Component-based Development</b>, where I
              have built reusable components such as Navbars, Footers, and
              Forms, ensuring scalability and maintainability.
              <br />I have also developed{" "}
              <b className="purple">advanced components</b> like audio
              recorders, file-saver functionalities, and photo scanners, meeting
              diverse requirements.
              <br />
              <br />
              <b>Professional work highlights:</b>
              <ul>
                <li>
                  Designed and implemented a <b className="purple">Kafka-based publish-subscribe</b> logging system to capture and persist
                  user and system events across Phenom products. Events were published to Kafka and stored using
                  Loki, with a Spring Boot-based API for querying logs by date range. A ReactJS frontend enabled
                  dynamic log retrieval. Enterprise clients, including MERCK and Regions Bank, adopted this feature
                  under a $25,000 subscription model.
                </li>
                <li>
                  I've converted over 20 Figma designs into functional apps with{" "}
                  <b className="purple">React and JavaScript</b>, leveraging frameworks
                  like Ant Design, Material-UI, and Bootstrap for responsive and
                  user-friendly interfaces.
                </li>
                <li>
                  Built a <b className="purple">Quality Assurance Tool</b> using
                  Django and React, reducing QA efforts by 42%.
                </li>
                <li>
                  Developed a <b className="purple">JIRA Utility Tool</b> by
                  integrating JIRA REST APIs, improving project workflows.
                </li>
                <li>
                  Integrated multiple child applications into a single parent app using <b className="purple">Webpack 5's module federation </b>
                  feature, significantly improving deployment speed and efficiency while enhancing application scalability.
                </li>
              </ul>
              <br />
              <b>Academic highlights:</b>
              <ul>
                <li>
                  Developed a <strong className="purple">software-based load balancer</strong> using Java and Socket Programming, implementing the
                  Round-Robin algorithm for efficient traffic distribution across multiple servers. Integrated real-time server
                  health monitoring to detect failures and reroute traffic dynamically, ensuring high availability and reliability.
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-wrapper">
              <img src={myImg} className="avatar-img" alt="avatar" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abdur1r"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AbdurRahmanSk11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdurrahmanshaik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/a.b.d.u.r.1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
