import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import TextBoxWithLabel from "../common/textboxwithlabel.js";
import Dropdown from "../common/dropdown.js";

class DriversLicenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormErrors: [],
      LicenseNumber: this.props.LicenseModel.LicenseNumber,
      LicenseState: this.props.LicenseModel.LicenseState,
      NumberdivClasses: "validation-tag-error",
      DropDownDivClasses: "validation-tag-error"
    };
  }

  onChangeLicenseNumber = license => {
    this.setState({ LicenseNumber: license });
    if (license === "") {
      this.setState({ NumberdivClasses: "validation-tag-error" });
    } else {
      this.setState({ NumberdivClasses: "validation-tag-ok" });
    }
  };

  onChangeLicenseState = selectedState => {
    this.setState({
      LicenseState: selectedState.value,
      DropDownDivClasses: "validation-tag-ok"
    });
  };

  onContinue = () => {
    var errArray = [];
    if (this.state.LicenseNumber.trim() === "") {
      errArray.push("Drivers License is mandatory field.");
    }

    if (this.state.LicenseState.trim() === "") {
      errArray.push("License State is mandatory field.");
    }

    if (errArray.length > 0) {
      this.setState({ FormErrors: errArray });
      return;
    }
    this.setState({ FormErrors: [] });
    const licenseModel = {
      DriversLicense: {
        LicenseNumber: this.state.LicenseNumber,
        LicenseState: this.state.LicenseState
      },
      Medicare: {
        MedicareNumber: "",
        ReferenceNumber: "",
        ValidUntil: ""
      },
      Passport: {
        PassportNumber: ""
      },
      LicenseType: "Drivers License"
    };
    this.props.onContinue(licenseModel, "DriversLicense");
  };

  render() {
    const isrequired = true;
    return (
      <React.Fragment>
        <Header Title="Add Your Drivers License" />
        <table>
          <tbody>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses={this.state.NumberdivClasses}
                  labelname="Drivers license number"
                  fieldname="drivers-license"
                  inputclasses="k-textbox react-padding"
                  IsRequired={isrequired}
                  InputValue={this.state.LicenseNumber}
                  InputHandler={this.onChangeLicenseNumber}
                />
              </td>
            </tr>
            <tr>
              <td className="label-for">
                <Dropdown
                  data={this.props.stateNames}
                  handleChange={this.onChangeLicenseState}
                  divclasses={this.state.DropDownDivClasses}
                  SelectedValue={this.state.LicenseState}
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

export default DriversLicenseForm;
