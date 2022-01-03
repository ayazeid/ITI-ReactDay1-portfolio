import React, { Component } from "react";
import ProgressBar from "../components/ProgressBar";

export default class SkillsRate extends Component {
  render() {
    const { styling, list } = this.props;
    return (
      <div className={"text-left m-auto " + styling}>
        {list.map((l) => (
          <ProgressBar title={l.title} rate={l.rate} />
        ))}
      </div>
    );
  }
}
