import React from "react";
import ArrayDisplay from "../common/arraydisplay.js";

class GridItem extends React.Component {
  render() {
    const divStyle = {
      display: "flex"
    };
    const labelstyle = {
      marginLeft: "auto"
    };
    return (
      <React.Fragment>
        <hr style={{ borderColor: "#1e615d72", borderWidth: "0.5px" }} />
        <div style={divStyle}>
          <label>{this.props.KeyProperty}</label>
          <ArrayDisplay Data={this.props.ValueProperty} />
        </div>
      </React.Fragment>
    );
  }
}

export default GridItem;
