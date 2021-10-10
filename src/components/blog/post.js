import React from "react";
import { Card, Button } from "react-bootstrap";
import defaultImg from "../../assets/images/1.jpeg";
const post = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img variant="top" src={defaultImg} />
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
        <Button
          onClick={() =>
            props.openModal(props.post.id, props.post.title, props.post.body)
          }
          variant="primary"
        >
          Show Post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default post;
