import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


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
              imgPath={chatify}
              isBlog={false}
              title="StudyNotion"
              description="StudyNotion is a cutting-edge ed-tech platform designed to revolutionize the way students learn and instructors teach. With its seamless integration of the MERN stack, StudyNotion offers a dynamic and interactive learning experience. "
              ghLink="https://github.com/SamarAhar/StudyNotion"
              demoLink="https://study-notion-samar-ahar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page built with Next.js and Tailwind CSS seamlessly integrates markdown files for easy content management and rendering. Additionally, it features responsive design and optimized performance for a smooth browsing experience."
              ghLink="https://github.com/SamarAhar/Bits-0f-C0de"
              demoLink="https://samarblogs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shopping Cart"
              description="The shopping cart project is a dynamic web application developed using React.js, Redux, and Tailwind CSS. It serves as a virtual storefront where users can browse through a catalog of products, add items to their cart, and proceed to checkout seamlessly."
              ghLink="https://github.com/SamarAhar/shopping-cart"
              demoLink="https://shopping-cart-samarahar.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
