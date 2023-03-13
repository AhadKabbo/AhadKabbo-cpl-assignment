import { Container, Row, Col, Card } from "react-bootstrap";
import { p2, p3 } from "../../../assets/index";
import "./popularPackage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularPackage = () => {
  return (
    <>
      <div className="package-bg-image">
        <div className="package-content">
          <Container>
            <Row className="pt-5">
              <Col>
                <h1 className="textColor fs-2 fw-bolder pb-4 ">
                  FIND OUR POPULAR PACKAGE
                </h1>
              </Col>
              <Col className="d-flex justify-content-end textColor">
                <FaArrowLeft className="me-3" />
                <FaArrowRight />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Card className="package-card">
                  <Card.Img variant="top" src={p3} fluid />
                  <Card.Body>
                    <Card.Title className="text-center">PACKAGE 1</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="package-card">
                  <Card.Img variant="top" src={p2} fluid />
                  <Card.Body>
                    <Card.Title className="text-center">PACKAGE 1</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="package-card">
                  <Card.Img variant="top" src={p3} fluid />
                  <Card.Body>
                    <Card.Title className="text-center">PACKAGE 1</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-center">
                <button className="view-all-package ms-4 px-4 py-3">
                  VIEW ALL PACKAGE
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default PopularPackage;
