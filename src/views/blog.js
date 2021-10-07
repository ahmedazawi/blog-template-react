import React from "react";
import Header from "../components/layout/header";
import Head from "../components/blog/head";
import Posts from "../components/blog/posts";
import Footer from "../components/layout/footer";

const blog = () => {
  return (
    <>
      <Header />
      <Head />
      <Posts />
      <Footer />
    </>
  );
};

export default blog;
