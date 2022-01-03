import React, { Component } from "react";
import pic from "../assets/Version control-pana.svg";
import Heading from "../components/Heading";
import Image from "../components/Image";
export default class Header extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme}>
        <div className="container">
          <div className="row ">
            <Heading />
            <Image url={pic} />
          </div>
        </div>
      </div>
    );
  }
}
