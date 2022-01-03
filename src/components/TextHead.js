import React, { Component } from "react";

export default class TextHead extends Component {
  render() {
    const { title, styling } = this.props;
    return (
      <div className={styling}>
        <h1 className="display-4 m-auto ">{title}</h1>
      </div>
    );
  }
}
