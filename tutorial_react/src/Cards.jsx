import { Card, Button } from "react-bootstrap";

const Cards = ({ title, text }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
