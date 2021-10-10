import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/layout/header";
import Blog from "./views/blog";
import Home from "./views/home";
import NotFound from "./views/NotFound";
import SinglePost from "./views/singlePost";
import Loader from "./components/layout/Loader";
import Footer from "./components/layout/footer";
import "./assets/css/main.css";
const AddPost = React.lazy(() => import("./views/addPost")); // lazy component

class App extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/app">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            {/* Gurds */}
            {this.state.auth === true ? (
              <Route
                path="/posts/add-post"
                render={(props) => {
                  return (
                    <Suspense fallback={<Loader />}>
                      <AddPost {...props} />
                    </Suspense>
                  );
                }}
              />
            ) : (
              <Redirect from="/posts/add-post" to="/" />
            )}
            <Route path="/posts/:id" component={SinglePost} />
            <Redirect from="/home" to="/" />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
