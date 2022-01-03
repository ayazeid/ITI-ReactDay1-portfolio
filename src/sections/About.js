import React, { Component } from "react";
import Buttom from "../components/Buttom";
import TextDescr from "../components/TextDescr";
import TextHead from "../components/TextHead";
import resume from "../assets/resume/Aya Maged Mohamed-Web Developer Resume.pdf";
export default class About extends Component {
  press = () => {
    console.log("click");
  };
  render() {
    const { theme } = this.props;
    return (
      <div className={theme}>
        <div className="container p-5">
          <div className="row">
            <TextHead
              title="About Me"
              styling="col-md-4 align-items-start texthead textshadow"
            />
            <div className="col-md-8 text-start">
              <TextDescr />
              <Buttom
                title="Download Resume"
                color="btn-secondary bg-gradient"
                src={resume}
                downloadable
                onpress={() => this.press()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
