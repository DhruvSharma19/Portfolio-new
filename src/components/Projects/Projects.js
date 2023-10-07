import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import velle from "../../Assets/Projects/velle.png";
import youtube from "../../Assets/Projects/youtube.png";
import crowdfunding from "../../Assets/Projects/crowdfunding.png";

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
              imgPath={crowdfunding}
              isBlog={false}
              title="FundHive"
              description="FundHive is an innovative crowdfunding web application built on the Ethereum blockchain using Solidity smart contracts. It serves as a decentralized platform that allows users to create and contribute to crowdfunding campaigns for various organizations. "
              ghLink="https://github.com/DhruvSharma19/crowdFunding"
              demoLink="https://incredible-rugelach-dd78fb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={velle}
              isBlog={false}
              title="Velle"
              description="It's a social media web application that I've been working on. The main goal behind 'Velle' is to create a platform where users can connect, share content, and engage with friends in a dynamic and interactive way."
              ghLink="https://github.com/DhruvSharma19/velle"
              demoLink="https://elaborate-cajeta-d20f6b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="This is a web application inspired by Youtube for users to stream and share thoughts through videos. It allows users to upload their own videos and comment on any other video as well."
              ghLink="https://github.com/DhruvSharma19/youtube"
              demoLink="https://loquacious-pixie-1bfcbb.netlify.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
