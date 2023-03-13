import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

const MainNavigationBar = () => {
  return (
    <Navbar className="px-5" expand="lg ">
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold" href="#">
          Dhaka Resort
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          className=" d-flex justify-content-around"
          id="navbarScroll">
          <Nav className="my-lg-3 fw-bolder" navbarScroll>
            <Nav.Link className=" textColor px-4 fs-6" href="#">
              HOME
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              PACKAGES
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              ECO PARK
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              COTTAGE
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              OUR RESORT
            </Nav.Link>
            <Nav.Link className="textColor px-4 fs-6" href="#">
              EVENT
            </Nav.Link>
            <Nav.Link className="textColor ps-4 fs-6" href="#">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigationBar;
