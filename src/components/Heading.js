import React, { Component } from "react";
import Buttom from "./Buttom";
import TextHead from "./TextHead";

export default class Heading extends Component {
  render() {
    return (
      <div className="col-md-4 text-light text-center mt-5 pt-5">
        <div className="mt-5">
          <TextHead title="Aya Maged" styling="texthead" />
          <p className="h6 m-1">Full Stack Web Developer</p>
          <Buttom
            title="Contact Me"
            color="btn-outline-light"
            src="mailto:aya.zeid95@gmail.com"
          />
        </div>
      </div>
    );
  }
}
