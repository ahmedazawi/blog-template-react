import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../components/layout/Loader";
const AddPost = (props) => {
  const [titleValid, setTitleValid] = useState({
    touched: false,
    isValid: false,
    errMsg: "",
  });
  const [bodyValid, setBodyValid] = useState({
    touched: false,
    isValid: false,
    errMsg: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkTitleValdiation = (event) => {
    let val = event.target.value.trim();
    let valids = { ...titleValid };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid = false;
      valids.errMsg = "Title is Required";
    } else if (val.split(" ").length < 3) {
      valids.isValid = false;
      valids.errMsg = "Title must be more than 3 words";
    } else if (val.split(" ").length > 10) {
      valids.isValid = false;
      valids.errMsg = "Title must be less than 10 words";
    } else {
      valids.isValid = true;
      valids.errMsg = "";
    }
    setTitleValid({ ...valids });
  };

  const checkBodyValdiation = (event) => {
    let val = event.target.value.trim();
    let valids = { ...bodyValid };
    valids.touched = true;
    if (val.length <= 0) {
      valids.isValid = false;
      valids.errMsg = "Description is Required";
    } else if (val.split(" ").length < 10) {
      valids.isValid = false;
      valids.errMsg = "Description must be more than 10 words";
    } else if (val.split(" ").length > 50) {
      valids.isValid = false;
      valids.errMsg = "Description must be less than 50 words";
    } else {
      valids.isValid = true;
      valids.errMsg = "";
    }
    setBodyValid({ ...valids });
  };

  const addPostHandler = async (event) => {
    event.preventDefault(); // will stop reloading
    let title = event.target.title.value;
    let body = event.target.body.value;
    setIsLoading(true);
    if (titleValid && bodyValid) {
      const res = await sendPost({ title, body });
      console.log(res);
      if (res) {
        props.history.replace("/blog");
        // setTimeout(() => {
        //   document.location.reload();
        // }, 500);
      }
    }
    setIsLoading(false);
  };

  const sendPost = (post) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(post);
      }, 2000);
    });
  };
  return (
    <Container>
      <Row>
        <Col
          md={6}
          lg={4}
          className="mx-auto card my-5 bg-secondary pt-4 shadow-sm"
        >
          <h1 className="text-center mb-3">Add Post</h1>
          <Form onSubmit={addPostHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post Title"
                name="title"
                onChange={checkTitleValdiation}
                className={
                  titleValid.isValid && titleValid.touched
                    ? "border-success border-2"
                    : !titleValid.isValid && titleValid.touched
                    ? "border-danger border-2"
                    : ""
                }
              />
              {titleValid.errMsg ? (
                <small className="text-danger p-1">{titleValid.errMsg}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post Description</Form.Label>
              <Form.Control
                as="textarea"
                name="body"
                placeholder="Add a description to your post"
                rows={3}
                onChange={checkBodyValdiation}
                className={
                  bodyValid.isValid && bodyValid.touched
                    ? "border-success border-2"
                    : !bodyValid.isValid && bodyValid.touched
                    ? "border-danger border-2"
                    : ""
                }
              />
              {bodyValid.errMsg ? (
                <small className="text-danger p-1">{bodyValid.errMsg}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={titleValid.isValid && bodyValid.isValid ? false : true}
            >
              {!isLoading ? "Add New Post" : <Loader />}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
