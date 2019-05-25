import React from "react";
import Button from "./button.js";

const divStyle = {
  display: "flex"
};
class Footer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Button
          classes="button -tertiary center medium"
          buttonName="Back"
          handleClick={this.props.backButtonClick}
        />
        <Button
          classes="button -primary center medium autoleftbutton"
          buttonName="Continue"
          handleClick={this.props.ContinueClick}
        />
      </div>
    );
  }
}

export default Footer;
