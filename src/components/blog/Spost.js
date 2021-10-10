import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Spost = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center p-4" lg={12}>
            {props.post.bodyModal}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Spost;
