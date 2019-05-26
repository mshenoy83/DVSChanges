import React from "react";
import Header from "../common/header.js";
import TextBoxWithLabel from "../common/textboxwithlabel.js";
import medicareImage from "../content/images/medicareCard.png";
import Footer from "../common/footer.js";

class MedicareForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormErrors: [],
      MedicareNumber: this.props.MedicareModel.MedicareNumber,
      ReferenceNumber: this.props.MedicareModel.ReferenceNumber,
      ValidUntil: this.props.MedicareModel.ValidUntil,
      MedicareNumberdivClass: "validation-tag-error",
      RefNumberDivClasses: "validation-tag-error",
      ValidUntilDivClasses: "validation-tag-error"
    };
  }

  onContinue = () => {
    var errArray = [];
    if (this.state.MedicareNumber.trim() === "") {
      errArray.push("Medicare Number is a mandatory field.");
    } else {
      if (isNaN(parseInt(this.state.MedicareNumber, 10))) {
        errArray.push("Invalid Medicare Number.");
      }
    }

    if (this.state.ReferenceNumber.trim() === "") {
      errArray.push("Individual Reference Number is a mandatory field.");
    } else {
      if (isNaN(parseInt(this.state.ReferenceNumber, 10))) {
        errArray.push("Invalid Individual Reference Number.");
      }
    }

    if (this.state.ValidUntil.trim() === "") {
      errArray.push("Expiry date is a mandatory field.");
    } else {
      const strArray = this.state.ValidUntil.split("/");
      const month = parseInt(strArray[0], 10) - 1;
      //get the last date of the month
      var lastdate = new Date("20" + strArray[1], strArray[0], 0).getDate();
      // Create date from input value
      var inputDate = new Date("20" + strArray[1], month, lastdate);
      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if (inputDate.setHours(0, 0, 0, 0) < todaysDate.setHours(0, 0, 0, 0)) {
        errArray.push("Invalid Expiry date.");
      }
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
        MedicareNumber: this.state.MedicareNumber,
        ReferenceNumber: this.state.ReferenceNumber,
        ValidUntil: this.state.ValidUntil
      },
      Passport: {
        PassportNumber: ""
      },
      LicenseType: "Medicare Card"
    };
    this.props.onContinue(licenseModel, "Medicare");
  };

  onChangeMedicareNumber = medicarenumber => {
    this.setState({ MedicareNumber: medicarenumber });
    if (medicarenumber === "") {
      this.setState({ MedicareNumberdivClass: "validation-tag-error" });
    } else {
      this.setState({ MedicareNumberdivClass: "validation-tag-ok" });
    }
  };

  onChangeReferenceNumber = referencenumber => {
    this.setState({ ReferenceNumber: referencenumber });
    if (referencenumber === "") {
      this.setState({ RefNumberDivClasses: "validation-tag-error" });
    } else {
      this.setState({ RefNumberDivClasses: "validation-tag-ok" });
    }
  };

  onChangeValidUntil = validuntil => {
    this.setState({ ValidUntil: validuntil });
    if (validuntil === "") {
      this.setState({ ValidUntilDivClasses: "validation-tag-error" });
    } else {
      this.setState({ ValidUntilDivClasses: "validation-tag-ok" });
    }
  };

  render() {
    const cleaveOptions = {
      date: true,
      datePattern: ["m", "y"]
    };

    const referencenumberCleave = {
      blocks: [2]
    };

    const medicareCleave = {
      blocks: [4, 5, 1],
      numeralThousandsGroupStyle: "none"
    };
    return (
      <React.Fragment>
        <Header Title="Add Your Medicare Card" />
        <table>
          <tbody>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses={this.state.MedicareNumberdivClass}
                  labelname="Medicare Number (1)"
                  fieldname="medicarenumber"
                  inputclasses="k-textbox react-padding"
                  PlaceHolder="e.g 12345678"
                  InputValue={this.state.MedicareNumber}
                  InputHandler={this.onChangeMedicareNumber}
                  cleaveOptions={medicareCleave}
                />
              </td>
            </tr>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses={this.state.RefNumberDivClasses}
                  labelname="Reference Number (2)"
                  fieldname="referencenumber"
                  inputclasses="k-textbox react-padding"
                  PlaceHolder="e.g 1"
                  InputValue={this.state.ReferenceNumber}
                  InputHandler={this.onChangeReferenceNumber}
                  cleaveOptions={referencenumberCleave}
                />
              </td>
            </tr>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses={this.state.ValidUntilDivClasses}
                  labelname="Valid until (3)"
                  PlaceHolder="MM/YY"
                  fieldname="validuntil"
                  inputclasses="k-textbox react-padding"
                  cleaveOptions={cleaveOptions}
                  InputValue={this.state.ValidUntil}
                  InputHandler={this.onChangeValidUntil}
                />
              </td>
            </tr>
            <tr>
              <td>
                <br />
                <img
                  className="medicare"
                  src={medicareImage}
                  alt="Medicare Card"
                />
                <br />
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
                <div>
                  {this.state.FormErrors.map(txt => (
                    <p className="validation-error-message">{txt}</p>
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

export default MedicareForm;
