import React from 'react';
import Container from 'react-bootstrap/Container';
import karityImage from '../../Assets/karity.png';
import linkfolioImage from '../../Assets/linkfolio.png';
import photolabsImage from '../../Assets/photolabs.png';

import Carousel from 'react-bootstrap/Carousel';
import './Portfolio.css';

export function Portfolio() {
  const projects = [
    {
      title: "Karity",
      description: "A collaborative group project, Karity innovatively connects charitable organizations with donors, streamlining the donation process through a user-friendly platform. It enables organizations to create projects, request donations, and keep donors updated.",
      imageUrl: karityImage,
      frontEndTechStack: ["React", "React Router", "React Context", "Bootstrap"],
      backEndTechStack: ["Node", "Express", "PostgreSQL"],
      codeLink: "https://github.com/Klobsinger/Karity",
    },
    {
      title: "Linkfolio",
      description: "A collaborative group project, Linkfolio allows learners to save learning resources like tutorials, blogs, and videos in a central place that is publicly available to any user.",
      imageUrl: linkfolioImage,
      frontEndTechStack: ["HTML", "CSS", "JavaScript", "jQuery", "EJS"],
      backEndTechStack: ["Node", "Express", "PostgreSQL"], 
      codeLink: "https://github.com/Klobsinger/Linkfolio",
    },
    {
      title: "PhotoLabs",
      description: "React-based single-page application that allows users to view photos in different contexts.",
      imageUrl: photolabsImage,
      frontEndTechStack: ["Axios", "React", "SASS", "Webpack"],
      backEndTechStack: ["Node", "Express", "PostgreSQL", "Socket.io"], 
      codeLink: "https://github.com/Klobsinger/photolabs",
    },
  ];

  return (
    <Container className="carousel-container">
      <Carousel interval={null}>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={project.imageUrl}
              alt={project.title}
              style={{height: '80vh', objectFit: 'cover'}}
            />
            <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '5px'}}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.frontEndTechStack && <p><strong>Front-end:</strong> {project.frontEndTechStack.join(', ')}</p>}
              {project.backEndTechStack && project.backEndTechStack.length > 0 && <p><strong>Back-end:</strong> {project.backEndTechStack.join(', ')}</p>}
              <p>
                {project.projectLink && <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">View Project</a>}
                {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}