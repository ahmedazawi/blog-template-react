import React, { Component } from "react";

export class NotFound extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.history.replace("/404"); // replace the pathname
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Page Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
