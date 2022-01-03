import React, { Component } from "react";
import Buttom from "../components/Buttom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import IconLink from "../components/IconLink";
export default class Footer extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme}>
        <div className="container text-light mt-3">
          <div className="float-start text-start">
            <p>GET IN TOUCH</p>
            <div>
              <p>
                <IconLink
                  name={faEnvelope}
                  link="mailto:aya.zeid95@gmail.com"
                />
                <span>aya.zeid95@gmail.com</span>
              </p>
              <p>
                <IconLink name={faPhoneSquare} />
                <span>1284555455</span>
              </p>
            </div>
          </div>
          <Buttom
            title="Contact Me"
            color="btn-outline-light"
            src="mailto:aya.zeid95@gmail.com"
          />
          <div className="float-end mt-4">
            <IconLink
              name={faLinkedin}
              link="https://www.linkedin.com/in/aya-zeid/"
            />
            <IconLink
              name={faFacebook}
              link="https://www.facebook.com/aya.zeid"
            />
            <IconLink name={faTwitter} link="https://twitter.com/Ayazeid" />
            <IconLink name={faGithub} link="https://github.com/ayazeid" />
            <p>
              <span>copyright @2021</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
