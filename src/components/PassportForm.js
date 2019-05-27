import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import TextBoxWithLabel from "../common/textboxwithlabel.js";

class PassportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormErrors: [],
      PassportNumber: this.props.PassportModel.PassportNumber,
      NumberdivClass: "validation-tag-error"
    };
  }

  onContinue = () => {
    var errArray = [];
    if (this.state.PassportNumber.trim() === "") {
      errArray.push("Passport Number is a mandatory field.");
    }

    if (errArray.length > 0) {
      this.setState({ FormErrors: errArray });
      return;
    }
    this.setState({ FormErrors: [] });
    const licenseModel = {
      DriversLicense: {
        LicenseNumber: "",
        LicenseState: ""
      },
      Medicare: {
        MedicareNumber: "",
        ReferenceNumber: "",
        ValidUntil: ""
      },
      Passport: {
        PassportNumber: this.state.PassportNumber
      },
      LicenseType: "Passport"
    };
    this.props.onContinue(licenseModel, "Passport");
  };

  onChangePassportNumber = passportNumber => {
    this.setState({ PassportNumber: passportNumber });
    if (passportNumber === "") {
      this.setState({ NumberdivClass: "validation-tag-error" });
    } else {
      this.setState({ NumberdivClass: "validation-tag-ok" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header Title="Add Your Passport" />
        <table>
          <tbody>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses={this.state.NumberdivClass}
                  labelname="Passport Number"
                  fieldname="passportnumber"
                  PlaceHolder="e.g M12345678"
                  inputclasses="k-textbox react-padding"
                  InputValue={this.state.PassportNumber}
                  InputHandler={this.onChangePassportNumber}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Footer
                  backButtonClick={this.props.BackToSelection}
                  ContinueClick={this.onContinue}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="validation-summary-errors error">
                  {this.state.FormErrors.map((txt, idx) => (
                    <p key={idx}>{txt}</p>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default PassportForm;
