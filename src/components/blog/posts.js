import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Post from "./post";
import Loader from "../layout/Loader";
import axios from "axios";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
export class posts extends Component {
  state = {
    posts: [],
    showModal: false,
    titleModal: null,
    bodyModal: null,
    idModal: null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((json) => {
      this.setState({ posts: json.data });
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
      return <Loader />;
    }
  };
  openModal = (id, title, body) => {
    this.showModal();
    this.setState({ idModal: id });
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
            <Link
              className="btn btn-primary"
              to={{
                pathname: "/posts/" + this.state.idModal,
                state: this.state,
              }}
            >
              Show
            </Link>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default withRouter(posts);
