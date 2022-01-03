import React, { Component } from "react";

export default class Focus extends Component {
  render() {
    const { list } = this.props;
    return (
      <div
        className="col-md-2 m-auto"
        style={{ maxWidth: 200, marginLeft: "10rem", marginTop: "3rem" }}
      >
        <p className="">MY FOCUS</p>
        <hr></hr>
        <div className="p-2 text-start ">
          {list.map((l) => (
            <p>{l}</p>
          ))}
        </div>
      </div>
    );
  }
}
