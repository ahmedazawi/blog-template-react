import React, { Component } from "react";
import Post from "./post";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
export class posts extends Component {
  state = {
    posts: [],
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
            <Post post={post} />
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
      </Container>
    );
  }
}

export default posts;
