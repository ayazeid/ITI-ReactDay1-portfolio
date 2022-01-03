import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container " style={{ maxWidth: 800 }}>
        <div className="row row-cols-1 row-cols-md-3">
          {list.map((l) => (
            <Card title={l} />
          ))}
        </div>
      </div>
    );
  }
}
