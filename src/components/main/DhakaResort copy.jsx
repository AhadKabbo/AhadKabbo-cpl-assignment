import { Row, Col, Container, Figure } from "react-bootstrap";
import p1 from "../../assets/p1.jpg";

const DhakaResortCopy = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <div className="photo-grid-box2">
                  <Figure>
                    <Figure.Image
                      width={150}
                      height={150}
                      alt="171x180"
                      src={p1}
                      fluid
                    />
                  </Figure>
                </div>
              </Col>
              <Col md={6}>
                <div className="photo-grid-box1">
                  <Figure>
                    <Figure.Image
                      width={250}
                      height={150}
                      alt="171x180"
                      src={p1}
                      fluid
                    />
                  </Figure>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="photo-grid-box2  ">
                  <Figure>
                    <Figure.Image
                      width={150}
                      height={150}
                      alt="171x180"
                      src={p1}
                      fluid
                    />
                  </Figure>
                </div>
              </Col>
              <Col md={6}>
                <div className="photo-grid-box1 ">
                  <Figure>
                    <Figure.Image
                      width={150}
                      height={150}
                      alt="171x180"
                      src={p1}
                      fluid
                    />
                  </Figure>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h2>Section Title</h2>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DhakaResortCopy;
