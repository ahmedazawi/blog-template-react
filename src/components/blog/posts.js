import React, { Component } from "react";
import Post from "./post";
import axios from "axios";
import { Container, Row, Col, Spinner, Modal, Button } from "react-bootstrap";
export class posts extends Component {
  state = {
    posts: [],
    showModal: false,
    titleModal: null,
    bodyModal: null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((json) => {
      this.setState({ posts: json.data });
      // console.log(this.state.posts);
    });
  }

  renderPosts = () => {
    if (this.state.posts.length > 0) {
      return this.state.posts.map((post) => {
        return (
          <Col
            className="d-flex justify-content-center"
            md={6}
            lg={4}
            key={post.id}
          >
            <Post post={post} openModal={this.openModal} />
          </Col>
        );
      });
    } else {
      return (
        <Col lg={12} className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      );
    }
  };
  openModal = (title, body) => {
    this.showModal();
    this.setState({ titleModal: title });
    this.setState({ bodyModal: body });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  showModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="d-flex justify-content-center border-bottom pb-3 mb-4">
              Posts
            </h1>
          </Col>
        </Row>

        <Row>{this.renderPosts()}</Row>
        <Modal
          show={this.state.showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={this.closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>{this.state.titleModal}</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.bodyModal}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default posts;
