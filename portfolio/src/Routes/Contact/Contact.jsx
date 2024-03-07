import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export function Contact() {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Get In Touch</h2>
          <Form>
            <Form.Group className="mb-3" controlId="contactForm.Name">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactForm.Email">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactForm.Message">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}