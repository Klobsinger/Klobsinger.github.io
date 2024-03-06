import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import headshot from '../../Assets/headshot.png';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <Container>
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
            <Card.Body>
              <Card.Title>Hi, I'm Kevin. I Make Websites Come Alive</Card.Title>
              <Card.Text>
                From Service Worker to Web Wizard: Leveraging years of customer service expertise, I transition into the realm of web development with a keen eye for user experiences. My journey from managing cash flows and team supervision to mastering full-stack technologies showcases a dedication to excellence and a unique blend of skills. Empathetic to user needs and driven by the thrill of problem-solving, I create web applications that are not just functional but truly alive.
              </Card.Text>
              <Link to="/Portfolio" className="btn btn-primary me-2">View My Work</Link>
              <Link to="/Contact" className="btn btn-outline-primary me-2">Let's Talk!</Link>
              <a href="https://github.com/Klobsinger" className="logo-btn me-2 github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/kevin-lobsinger" className="logo-btn me-2" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src={headshot} alt="Kevin" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
