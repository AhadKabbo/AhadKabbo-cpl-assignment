import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { p1 } from "../../../assets/index";
import { reviews } from "./reviews.js";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div
        className="review-card-wrapper"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 72, 255, 0.9) 0%, rgba(121, 0, 0, 0.959) 100%)",
        }}>
        <Container>
          <Row className="justify-content-center py-5">
            <Col md={6} className="mx-auto mb-4 py-5">
              <Card>
                <Card.Body>
                  <Card.Text>{review.reviewText}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <Image
                    src={review.image}
                    roundedCircle
                    className="review-img"
                  />
                  <div>
                    <Card.Text className="mb-0 px-5 fs-3 fw-bold">
                      {review.name}
                    </Card.Text>
                    <Card.Text className="text-muted px-5">
                      {review.jobTitle}
                    </Card.Text>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReviewCard;
