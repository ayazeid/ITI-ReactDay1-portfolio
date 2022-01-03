import React, { Component } from "react";
import CardList from "../components/CardList";
import TextHead from "../components/TextHead";

export default class Portfolio extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme}>
        <div className="container">
          <TextHead
            title="Portfolio"
            styling="text-start textshadow texthead p-3 mb-3"
          />
          <CardList
            list={[
              "FRONTEND DEVELOPMENT",
              "BACKEND DEVELOPMENT",
              "FULL STACK DEVELOPMENT",
              "BASH SCRIPTING",
              "REACTJS WEB APP",
              "UX DESIGN",
              "Database",
              "Photography",
            ]}
          />
        </div>
      </div>
    );
  }
}
