import { Card, Button } from "react-bootstrap";

const Cards = ({ title, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
