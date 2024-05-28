import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      name="contact"
      id="contact"
      className="footer bg-gradient-to-b from-blue-950 to-blue-900 text-white"
    >
      <Row className="justify-center items-center">
        <Col md="4" className="footer-copywright py-3">
          <h3 className="text-xl font-bold text-center">
            Designed and Developed by Michał Bożek
          </h3>
        </Col>
        <Col md="4" className="footer-copywright py-3">
          <h3 className="text-xl font-bold text-center">
            Copyright © {year} MB
          </h3>
        </Col>
        <Col md="4" className="footer-body text-center py-3">
          <ul className="footer-icons flex justify-center">
            <li className="social-icons mr-4">
              <a
                href="https://github.com/kjm9198"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li className="social-icons mr-4">
              <a
                href="https://www.linkedin.com/in/kjm9198/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kjm9198"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
