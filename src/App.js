import React, { Component } from "react";
import Blog from "./views/blog";
import "./assets/css/main.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
