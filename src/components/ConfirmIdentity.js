import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import GridItem from "../common/griditem.js";

class ConfirmIdentity extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header Title="Confirm Your Details" />
        <br />
        <GridItem KeyProperty="Madhav" ValueProperty="Shenoy" />
        <GridItem KeyProperty="Madhav" ValueProperty="Shenoy" />
      </React.Fragment>
    );
  }
}

export default ConfirmIdentity;
