import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="col mb-4 " style={{ height: 160, width: 200 }}>
        <div className="card h-100 cardshadow bg-warning">
          <div className="card-body align-items-center">
            <p className="card-title text-center  ">{title}</p>
          </div>
        </div>
      </div>
    );
  }
}
