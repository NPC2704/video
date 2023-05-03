import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://portfolio-9eab0.web.app/"
          size="lg"
        >
          Những điều bạn về tôi
        </Button>
      </Col>
    </Row>
  );
};

export default About;
