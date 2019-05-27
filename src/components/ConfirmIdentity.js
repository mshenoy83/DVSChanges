import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import GridItem from "../common/griditem.js";

class ConfirmIdentity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormErrors: [],
      isAuthorisationChecked: false
    };
  }

  handleAuthorisationChecked = () => {
    this.setState({
      isAuthorisationChecked: !this.state.isAuthorisationChecked
    });
  };

  onContinue = () => {
    var errArray = [];
    if (!this.state.isAuthorisationChecked) {
      errArray.push("Please agree to our policies to continue.");
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
            className="ws-checkbox"
            type="checkbox"
            id="confirm_authorisation"
            onChange={this.handleAuthorisationChecked}
          />
          <label htmlFor="confirm_authorisation" className="ws-checkbox-label">
            I confirm that I am the above mentioned individual and that the
            information is accurate, complete and not misleading and consent to
            my identity being verified with a third party identity matching
            provider.
          </label>
        </div>

        <Footer
          backButtonClick={this.props.BackToSelection}
          ContinueClick={this.onContinue}
          buttonName="Agree and Submit"
        />
        <br />
        <br />
        <div className="validation-summary-errors error">
          {this.state.FormErrors.map(txt => (
            <p>{txt}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ConfirmIdentity;
