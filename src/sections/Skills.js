import React, { Component } from "react";
import SkillsRate from "../components/SkillsRate";
import TextDescr from "../components/TextDescr";
import TextHead from "../components/TextHead";
import Focus from "../components/Focus";
export default class Skills extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme}>
        <div className="container p-5 text-light ">
          <TextHead title="Skills" styling="textshadow texthead" />
          <TextDescr styling="mt-3 " />
          <div className="row  m-4 ">
            <Focus list={["JavaScript", "ReactJS"]} />
            <SkillsRate
              styling="col-md-5"
              list={[
                { title: "HTML", rate: 80 },
                { title: "CSS", rate: 70 },
                { title: "JavaScript", rate: 85 },
                { title: "ReactJS", rate: 80 },
                { title: "ReactNative", rate: 50 },
                { title: "Redux", rate: 70 },
                { title: "Bootstrap", rate: 70 },
                { title: "Database", rate: 60 },
                { title: "PostgreSQL", rate: 10 },
                { title: "MongoDB", rate: 60 },
                { title: "Bash Script", rate: 70 },
                { title: "UX Design", rate: 40 },
                { title: "Figma", rate: 40 },
                { title: "Microsoft Office", rate: 80 },
                { title: "Adobe Photoshop", rate: 60 },
                { title: "Adobe Lightroom", rate: 70 },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
