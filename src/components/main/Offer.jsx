import { Container, Row, Col, Card } from "react-bootstrap";
import { p2, p3 } from "../../assets/index";
import "./popularPackage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./offer.css";

const Offer = () => {
  return (
    <>
      <div className="offer-bg-image">
        <div className="offer-content ">
          <Container className="d-flex justify-content-center pt-5">
            <div className="fs-2 fw-bolder pt-5 text-center">
              <h1 className="fs-2 fw-bolder pb-4 " style={{ color: "#007bff" }}>
                DISCOVER SPECIAL OFFER
              </h1>
              <h3>Make sure check out this special promotion </h3>
              <button className="view-all-offer mt-4 px-4 py-3">
                VIEW ALL OFFERS
              </button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Offer;
