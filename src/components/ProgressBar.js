import React, { Component } from "react";

export default class ProgressBar extends Component {
  render() {
    const { title, rate } = this.props;
    return (
      <div className="progress bg-white mt-2">
        <span
          className=" badge bg-dark "
          style={{ minWidth: 90, maxWidth: 90 }}
        >
          {title}
        </span>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${rate}%` }}
          aria-valuenow={rate}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  }
}
