import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaInbox, FaPhone } from "react-icons/fa";
import "../";

const WebFooter = () => {
  return (
    <>
      <footer className="navBg text-white py-5">
        <Container className="  px-5">
          <Row>
            <Col md={3}>
              <h3>Dhaka Resort</h3>
              <ul className="list-unstyled text-white">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <FaMapMarkerAlt />
                    Bandharbari, kaliakair, Gazipur, Dhaka Division, Bangladesh
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <FaInbox /> dhaka@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    <FaPhone /> 01757349573
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h4 className="text-white">Explore</h4>
              <ul className="list-unstyled">
                <li>About us</li>
                <li>Eco Park</li>
                <li>Events</li>
                <li>Packages</li>
              </ul>
            </Col>
            <Col md={3}>
              <h4 className="text-white">Resources </h4>
              <ul className="list-unstyled">
                <li>FAQ'S</li>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col md={3}>
              <h4 className="text-white">Don't Miss A Thing</h4>
              <p className="text-start">
                Subscribe for our latest & Articles. We Won't Give You Spam
                Mails
              </p>
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="me-2"
                />
                <Button className="discover-now"> SUBSCRIBE</Button>
              </Form>
            </Col>
          </Row>
          <hr className=" text-white" />
          <p className="text-center mb-0">
            Copyright 2022 Dhaka Resort. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default WebFooter;
