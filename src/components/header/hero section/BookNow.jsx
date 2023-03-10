import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";

const BookingForm = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center p-5"
        style={{ backgroundColor: "#007bff" }}>
        <h1 className="fs-2 fw-bolder text-white pb-4">RESERVE YOUR STAY</h1>
        <Form className="d-flex flex-column flex-md-row align-items-md-center">
          <Form.Group className="" controlId="packageSelect">
            <DropdownButton
              title="Packages"
              className="ms-2 text-black px-3"
              variant="light">
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Form.Group className="" controlId="dateSelect">
            <DropdownButton
              title="Packages"
              className="ms-2 text-black px-3"
              variant="light">
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Form.Group className="" controlId="guestSelect">
            <DropdownButton
              title="Packages"
              className="ms-2 text-black px-3"
              variant="light">
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Button
            variant="light"
            type="submit"
            className="ms-3 mt-md-0 fw-bolder"
            style={{ color: "#007bff" }}>
            Book Now
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default BookingForm;
