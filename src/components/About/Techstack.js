import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiTypescript,
  SiPostgresql,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import SpringBoot from "../../Assets/spring-boot.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="Spring Boot" xs={4} md={2} className="tech-icons">
        <img
          src={SpringBoot}
          style={{
            backgroundColor: "white",
            width: "40px"
          }}
        />
      </Col>
      <Col title="TypeScript" xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col title="JavaScript" xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col title="Node.js" className="tech-icons">
        <DiNodejs />
      </Col>
      <Col title="React.js" ssName=" tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col title="MongoDB" xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col title="Git" xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col title="SQL" className=" tech-icons">
        <SiMysql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col title="SQL" xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col title="Python" xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col title="Java" xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row >
  );
}

export default Techstack;
