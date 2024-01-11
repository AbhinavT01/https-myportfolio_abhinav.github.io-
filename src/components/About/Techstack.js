import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiPython,
  DiPhp,
  DiNodejs,
} from "react-icons/di";
import {
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiAndroid,
  SiMongodb,
} from "react-icons/si";

import {
  FaSalesforce,
} from "react-icons/fa"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
    </Col>
    
      
    </Row>
  );
}

export default Techstack;