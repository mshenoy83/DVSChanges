import React from "react";
import Button from "./button.js";

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Button
          classes="button -tertiary center medium"
          buttonName="Back"
          handleClick={this.props.backButtonClick}
        />
        <Button
          classes="button -primary center medium autoleftbutton"
          buttonName={this.props.buttonName || "Continue"}
          handleClick={this.props.ContinueClick}
        />
      </div>
    );
  }
}

export default Footer;
