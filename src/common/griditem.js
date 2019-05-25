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
        <hr style={{ backgroundColor: "#1e615d72" }} />
        <div style={divStyle}>
          <label>{this.props.KeyProperty}</label>
          <label style={labelstyle}>{this.props.ValueProperty}</label>
        </div>
      </React.Fragment>
    );
  }
}

export default GridItem;
