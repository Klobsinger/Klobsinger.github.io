import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import headshot from '../../Assets/headshot.png';
import './Landing.css'; // Ensure this file is updated with the new styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <Container className="landing-container">
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
            <Card.Body className="custom-card-body">
              {/* Greeting and name with size and style adjustments */}
              <Card.Title className="greeting-message">Hello</Card.Title>
              <Card.Title>
                <span className="light-message">I'm </span>
                <span className="bold-name-message">Kevin</span>
              </Card.Title>
              <Card.Title>
                <span className="light-message">a </span>
                <span className="profession-message">Web Developer</span>
              </Card.Title>
              {/* Description Text */}
              <Card.Text className="intro-text">
                Where creativity meets code. Transitioning from customer service to the dynamic world of web development, I blend empathy with technology to craft websites that breathe life into user experiences. Discover the magic of my full-stack development journey and how I turn challenges into digital solutions.
              </Card.Text>
               {/* Buttons and Social Icons */}
               <div className="buttons-container">
                <Link to="/Portfolio" className="btn btn-primary me-2">View My Work</Link>
                <Link to="/Contact" className="btn btn-outline-primary me-2">Let's Talk!</Link>
                <Link to="/About" className="btn btn-outline-primary me-2">More About Me</Link>
                
                <a href="https://github.com/Klobsinger" className="logo-btn me-2 github" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://linkedin.com/in/kevin-lobsinger" className="logo-btn me-2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="headshot-container">
          <img src={headshot} alt="Kevin" className="img-fluid headshot" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
