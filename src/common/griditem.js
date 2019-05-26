import React from "react";

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
          <label style={labelstyle}>{this.props.ValueProperty}</label>
        </div>
      </React.Fragment>
    );
  }
}

export default GridItem;
