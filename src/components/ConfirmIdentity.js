import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import GridItem from "../common/griditem.js";

class ConfirmIdentity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormErrors: [],
      isAuthorisationChecked: false,
      isTncChecked: false
    };
  }

  handleAuthorisationChecked = () => {
    this.setState({
      isAuthorisationChecked: !this.state.isAuthorisationChecked
    });
  };

  handleTncChecked = () => {
    this.setState({
      isTncChecked: !this.state.isTncChecked
    });
  };

  onContinue = () => {
    console.log(this.state);
    var errArray = [];
    if (!this.state.isAuthorisationChecked) {
      errArray.push(
        "Please confirm that you have the authorisation to provide your personal details."
      );
    }

    if (!this.state.isTncChecked) {
      errArray.push(
        "Please agree to our terms and conditions and privacy policies to continue."
      );
    }
    this.setState({ FormErrors: errArray });
    if (errArray.length > 0) {
      return;
    }
  };

  render() {
    const model = {
      Name: "Madhav Shenoy",
      Email: "mshenoy83@gmail.com",
      Gender: "Male",
      DOB: "28/04/1983",
      "Mobile Phone": "0422 027 397",
      Address: ["520 Collins Street", "Melbourne VIC 3000"],
      "Drivers License": "12345678-VIC"
    };
    return (
      <React.Fragment>
        <Header Title="Confirm Your Details" />
        <br />
        {Object.keys(model).map(key => (
          <GridItem KeyProperty={key} ValueProperty={model[key]} />
        ))}
        <hr style={{ borderColor: "#1e615d72", borderWidth: "0.5px" }} />
        <br />
        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            id="confirm_authorisation"
            onChange={this.handleAuthorisationChecked}
          />
          <label htmlFor="confirm_authorisation">
            I confirm that I am authorised to provide the personal details
            presented and I consent to my information being checked with the
            document issuer or official record holder for the purpose of
            confirming my identity.
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            id="confirm_tc"
            onChange={this.handleTncChecked}
          />
          <label htmlFor="confirm_tc">
            I have read the <a className="tnc-hyperlinks">Privacy</a> and{" "}
            <a className="tnc-hyperlinks">Terms and Conditions</a> and also
            consent to my informationbeing used to verify my identity agaianst
            personal information held by a credit reporting agency.
          </label>
        </div>
        <Footer
          backButtonClick={this.props.BackToSelection}
          ContinueClick={this.onContinue}
        />
        <br />
        <br />
        <div>
          {this.state.FormErrors.map(txt => (
            <p className="validation-error-message">{txt}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmIdentity;
