import "./navbar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Navbar
      className="backgroundColor px-5"
      style={{ maxHeight: "40px" }}
      expand="lg ">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className=" me-3" href="#">
              <FaPhone /> 123-456-7890
            </Nav.Link>
            <Nav.Link className="me-3" href="mailto:info@mywebsite.com">
              <FaEnvelope /> info@mywebsite.com
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center ">
            <Nav.Link className=" me-3" href="website.com">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link className=" me-3" href="website.com">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link className=" me-3" href="website.com">
              <FaInstagram />
            </Nav.Link>
            <Button
              style={{
                height: "34px",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "4px 8px",
                background: "white",
                color: "black",
              }}
              className="me-3 rounded-3 ">
              LogIn
            </Button>
            <Button
              style={{
                height: "34px",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "4px 8px",
                background: "#007bff",
                color: "white",
              }}
              className="me-3 rounded-3 ">
              SignUp
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
