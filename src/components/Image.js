import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { url } = this.props;
    return (
      <div className="col-md-8">
        <img
          src={url}
          alt=""
          className="img-fluid"
          style={{ height: 500, width: 800 }}
        />
      </div>
    );
  }
}
