import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class IconLink extends Component {
  render() {
    const { name, link } = this.props;
    return (
      <a className="m-1" href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={name} color="white" />
      </a>
    );
  }
}
