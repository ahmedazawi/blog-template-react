import React from "react";
// import Head from "../components/blog/head";
import Spost from "../components/blog/Spost";
const singlePost = (props) => {
  return (
    <>
      <div className="single-post-title">
        <h1 className="display-2 text-light">
          {props.location.state.titleModal
            ? props.location.state.titleModal
            : "Hello React"}
        </h1>
      </div>
      <Spost post={props.location.state} />
    </>
  );
};

export default singlePost;
