import { Row, Col, Container, Figure } from "react-bootstrap";
import { p2, p3 } from "../../assets/index";

const DhakaResort = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className="fs-2 fw-bolder pb-4" style={{ color: "#007bff" }}>
          Why Chose Dhaka Resort
        </h1>

        <div className="mx-5 text-center mb-5 " style={{ maxWidth: "800px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          molestias, unde velit corporis possimus, ut beatae impedit
          necessitatibus odit at excepturi praesentium nesciunt .
        </div>

        <Row>
          <Col md={6} className="pt-3">
            <Row>
              <Col md={6}>
                <div className="photo-grid-box2">
                  <Figure>
                    <Figure.Image
                      width={150}
                      height={150}
                      alt="171x180"
                      src={p2}
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
                      src={p3}
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
                      src={p3}
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
                      src={p2}
                      fluid
                    />
                  </Figure>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} className=" px-5">
            <div className="mx-3 mb-4" style={{ maxWidth: "500px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, molestias, unde velit corporis maiores. Veritatis,
              facere eos fugiat incidunt doloremque in quia! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Atque doloremque dolore
              nobis cumque dicta. Ipsam quo ducimus eveniet quasi ad?
            </div>
            <ul>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisic
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur adi sint.
              </li>

              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipist, sint.
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipit. 2
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisilit, sint.
              </li>
              <li className="mb-2">
                Lorem ipsum dolor sit sectetur adipisicing elit. 2
              </li>
            </ul>

            <button className="discover-now ms-4 px-4 py-3">
              DISCOVER NOW
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DhakaResort;
