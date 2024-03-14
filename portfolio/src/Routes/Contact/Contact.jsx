import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_du8mu6c', 'template_4bapvrf', e.target, 'CYYV3ddQg7xptO8IC')
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send the message, please try again.");
    });
};


export function Contact() {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Get In Touch</h2>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="contactForm.Name">
              <Form.Control type="text" placeholder="Your Name" name="from_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactForm.Email">
              <Form.Control type="email" placeholder="Your Email" name="from_email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactForm.Message">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" name="message" />
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