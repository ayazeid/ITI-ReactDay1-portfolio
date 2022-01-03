import React, { Component } from "react";

export default class Buttom extends Component {
  render() {
    const { title, color, onpress, src, downloadable } = this.props;
    if (src) {
      return (
        <a
          href={src}
          download={downloadable ? true : false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={"btn mt-3 " + color} onClick={onpress}>
            {title}
          </button>
        </a>
      );
    } else {
      return (
        <button className={"btn mt-3 " + color} onClick={onpress}>
          {title}
        </button>
      );
    }
  }
}
