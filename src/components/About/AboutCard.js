import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdur Rahman Shaik</span> from{" "}
            <span className="purple">India.</span>
            <br />
            I am a full-stack developer with more than 3 years of experience in
            technologies like React.js, Next.js, Django, FastAPI, JavaScript,
            Python, HTML, and CSS.
            <br />
            <br />
            I have worked on exciting projects that involve building reusable
            components, developing high-performance APIs, and integrating
            advanced tools and frameworks for seamless user experiences.
            <br />
            <br />
            Besides coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming and playing badminton
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Abdur Rahman Shaik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
