import React from "react";
import Button from "../common/button.js";
import Header from "../common/header.js";

class SelectIdentityForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          Title="Confirm your Identity"
          Description="Select a form of ID to add to your account.This helps us confirm your identity and secure your account."
          DescriptionClass="welcome-back"
        />
        <Button
          classes="button -secondary center medium"
          buttonName="AU DRIVERS LICENSE"
          handleClick={this.props.HandleDLClick}
        />
        <Button
          classes="button -secondary center medium"
          buttonName="AU MEDICARE CARD"
          handleClick={this.props.HandleMCClick}
        />
        <Button
          classes="button -secondary center medium"
          buttonName="AU PASSPORT"
          handleClick={this.props.HandlePClick}
        />
        <br />
        <Button
          classes="button -tertiary center small shrink20"
          buttonName="BACK"
          handleClick={this.props.HandleBackClick}
        />
      </React.Fragment>
    );
  }
}

export default SelectIdentityForm;
