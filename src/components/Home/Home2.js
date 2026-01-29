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
              Hi, I’m <span className="purple">Abdur Rahman Shaik</span>, a
              full-stack software engineer with <b className="purple">2+ years of professional experience</b>,
              currently graduating with a <b className="purple">Master’s degree</b>.
              I enjoy building scalable, production-grade systems and user-facing products
              that create real-world impact.
              <br />
              <br />

              I have hands-on experience across the stack, including
              <i>
                <b className="purple">
                  {" "}
                  React, Next.js, TypeScript, JavaScript, Node.js, Django, Spring Boot,
                  Java, Python, Kafka, PostgreSQL, HTML, and CSS
                </b>
              </i>
              .
              <br />
              <br />

              I specialize in <b className="purple">component-driven development</b> and
              scalable frontend architectures, building reusable, maintainable UI systems
              while working closely with backend services and APIs.
              <br />
              I’ve also built complex, production-ready features including
              <b className="purple"> data-driven dashboards, internal developer tools,
                and performance-sensitive user interfaces</b>.
              <br />
              <br />

              <b>Professional highlights:</b>
              <ul>
                <li>
                  Designed and built a <b className="purple">Kafka-based distributed logging system</b>
                  to capture and persist application and user events across multiple products.
                  Implemented a Spring Boot API for querying logs and a React-based UI for dynamic analysis.
                  This feature was adopted by enterprise clients including <b className="purple">Merck</b> and
                  <b className="purple"> Regions Bank</b> and shipped as a
                  <b className="purple"> $25K enterprise subscription</b>.
                </li>

                <li>
                  Built and shipped <b className="purple">production-grade frontend applications</b>,
                  converting 20+ Figma designs into responsive, accessible interfaces using
                  React, TypeScript, and modern UI frameworks.
                </li>

                <li>
                  Developed internal platforms that improved engineering efficiency, including a
                  <b className="purple"> Quality Assurance system</b> that reduced QA effort by
                  <b className="purple"> 42%</b>.
                </li>

                <li>
                  Integrated multiple independently deployed applications into a single platform using
                  <b className="purple"> Webpack 5 Module Federation</b>, significantly improving deployment
                  speed, scalability, and team autonomy.
                </li>

                <li>
                  Worked on systems emphasizing <b className="purple">performance, reliability,
                    and maintainability</b>, collaborating closely with product and cross-functional teams.
                </li>
              </ul>

              <br />

              <b>Systems & academic background:</b>
              <ul>
                <li>
                  Built a <b className="purple">software-based load balancer</b> using Java and socket
                  programming, implementing Round-Robin traffic distribution with real-time
                  server health monitoring to ensure fault tolerance and high availability.
                </li>
              </ul>

              <br />

              I’m particularly excited about roles where I can own features end to end,
              work on systems at scale, and contribute to products that combine
              <b className="purple"> strong engineering, thoughtful design, and real business impact</b>.
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
