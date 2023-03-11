import { Button, Card } from "react-bootstrap";
import p1 from "../../assets/p1.jpg";

const Test = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={p1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Test;
