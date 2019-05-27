import React from "react";
import ReactDOM from "react-dom";
import SelectIdentityForm from "./components/SelectIdentityForm.js";
import DriversLicense from "./components/DriversLicenseForm.js";
import MedicareForm from "./components/MedicareForm.js";
import PassportForm from "./components/PassportForm.js";
import ConfirmIdentity from "./components/ConfirmIdentity.js";

import "./styles.css";
import "./newstyles.css";

window.Customer = {
  Name: "Madhav Shenoy",
  Email: "mshenoy83@gmail.com",
  Gender: "Male",
  DOB: "28/04/1983",
  MobilePhone: "0422027397",
  AddressLine1: "520 Collins Street",
  AddressSuburb: "Melbourne",
  AddressState: "VIC",
  PostalCode: "3000"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      View: "",
      StateList: [],
      IdSelected: "",
      DVSModel: {
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
          PassportNumber: ""
        },
        LicenseType: ""
      }
    };
  }

  componentDidMount = () => {
    fetch("https://my-json-server.typicode.com/mshenoy83/demo/posts")
      .then(results => {
        return results.json();
      })
      .then(response => {
        this.setState({
          StateList: response
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleBackButtonForms = () => {
    switch (this.state.View) {
      case "DriversLicense":
      case "Medicare":
      case "Passport":
        this.setState({ View: "IdentitySelection" });
        break;
      case "ConfirmIdentity":
        if (this.state.IdSelected) {
          this.setState({ View: this.state.IdSelected });
        } else {
          this.setState({ View: "IdentitySelection" });
        }
        break;
      default:
        this.setState({ View: "IdentitySelection" });
        break;
    }
  };

  handleDriversLicenseClick = () => {
    this.setState({ View: "DriversLicense" });
  };

  handleMedicareClick = () => {
    this.setState({ View: "Medicare" });
  };

  handlePassportClick = () => {
    this.setState({ View: "Passport" });
  };

  SaveDocumentModel = (documentModel, idtype) => {
    this.setState({
      DVSModel: documentModel,
      IdSelected: idtype,
      View: "ConfirmIdentity"
    });
  };

  componentDidCatch = (error, errorInfo) => {
    console.log("App Errors below");
    console.log(error);
    console.log(errorInfo);
  };

  render() {
    let componentView;

    switch (this.state.View) {
      case "IdentitySelection":
        componentView = (
          <SelectIdentityForm
            HandleDLClick={this.handleDriversLicenseClick}
            HandleMCClick={this.handleMedicareClick}
            HandlePClick={this.handlePassportClick}
            HandleBackClick={() => console.log("Back clicked")}
          />
        );
        break;
      case "DriversLicense":
        componentView = (
          <DriversLicense
            BackToSelection={this.handleBackButtonForms}
            stateNames={this.state.StateList}
            LicenseModel={this.state.DVSModel.DriversLicense}
            onContinue={this.SaveDocumentModel}
          />
        );
        break;
      case "Medicare":
        componentView = (
          <MedicareForm
            BackToSelection={this.handleBackButtonForms}
            MedicareModel={this.state.DVSModel.Medicare}
            onContinue={this.SaveDocumentModel}
          />
        );
        break;
      case "Passport":
        componentView = (
          <PassportForm
            BackToSelection={this.handleBackButtonForms}
            PassportModel={this.state.DVSModel.Passport}
            onContinue={this.SaveDocumentModel}
          />
        );
        break;
      case "ConfirmIdentity":
        componentView = (
          <ConfirmIdentity
            BackToSelection={this.handleBackButtonForms}
            DvsModel={this.state.DVSModel}
          />
        );
        break;
      default:
        componentView = (
          <SelectIdentityForm
            HandleDLClick={this.handleDriversLicenseClick}
            HandleMCClick={this.handleMedicareClick}
            HandlePClick={this.handlePassportClick}
            HandleBackClick={() => console.log("Back clicked")}
          />
        );
        break;
    }

    return <div className="App">{componentView}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
