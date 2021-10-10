import React from "react";
import { Col, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Col lg={12} className="spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
  );
};

export default Loader;
