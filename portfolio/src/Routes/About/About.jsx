import React from 'react';
import { Container, Row, Col, Badge, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faToolbox, faSchool, faCheckCircle  } from '@fortawesome/free-solid-svg-icons';

export function About() {
  return (
    <Container>
      <Row className="my-5 align-items-center">
        {/* Introduction Section */}
        <Col md={12} className="text-center mb-5">
          <h1>Kevin Lobsinger</h1>
          <p className="lead">As a junior full-stack developer, I have a particular fondness for diving into the backend, where I can weave complex logic into seamless experiences. My journey through Lighthouse Labs' Web Development Program has equipped me with a diverse toolkit—from JavaScript and Ruby to ReactJS and NodeJS—allowing me to build intuitive, user-friendly websites and applications. Outside the world of code, my life is rich with strategy games and laughter, shared with my wife, Ghitsa, and our two charismatic cats, Leo and Robin. This blend of analytical challenge and personal joy fuels my passion for technology and life alike.

</p>
        </Col>
      </Row>

      <Row>
       {/* Skills and Technologies Section */}
<Col md={6} className="mb-5">
  <h2>Skills & Technologies</h2>
  <div>
    {/* Languages */}
    <p><FontAwesomeIcon icon={faCode} className="me-2" />Languages: <Badge bg="info" className="me-2">Javascript</Badge><Badge bg="info" className="me-2">Ruby</Badge><Badge bg="info" className="me-2">HTML</Badge><Badge bg="info" className="me-2">CSS</Badge></p>

    {/* Frameworks, Libraries, and Environments */}
    <p><FontAwesomeIcon icon={faToolbox} className="me-2" />Frameworks, Libraries, & Environments: <Badge bg="warning" className="me-2">NodeJS</Badge><Badge bg="warning" className="me-2">ReactJS</Badge><Badge bg="warning" className="me-2">Ajax</Badge><Badge bg="warning" className="me-2">Express</Badge><Badge bg="warning" className="me-2">EJS</Badge><Badge bg="warning" className="me-2">JQuery</Badge><Badge bg="warning" className="me-2">Bootstrap</Badge><Badge bg="warning" className="me-2">ActiveRecord</Badge><Badge bg="warning" className="me-2">Rails</Badge><Badge bg="warning" className="me-2">SASS</Badge></p>

    {/* Testing */}
    <p><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Testing: <Badge bg="success" className="me-2">Cypress</Badge><Badge bg="success" className="me-2">Jest</Badge><Badge bg="success" className="me-2">Mocha</Badge><Badge bg="success" className="me-2">Chai</Badge></p>

    {/* Systems, CMS, and Databases */}
    <p><FontAwesomeIcon icon={faDatabase} className="me-2" />Systems, CMS, & Databases: <Badge bg="secondary" className="me-2">SQL</Badge><Badge bg="secondary" className="me-2">Git</Badge></p>
  </div>
</Col>

        {/* Experience & Education Section */}
        <Col md={6} className="mb-5">
          <h2>Experience & Education</h2>
          <ListGroup variant="flush">
            <ListGroup.Item><FontAwesomeIcon icon={faSchool} className="me-2" />Lighthouse Labs Bootcamp - Web Development Program</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
