import React from "react";

class ArrayDisplay extends React.Component {
  render() {
    if (Array.isArray(this.props.Data)) {
      return (
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {this.props.Data.map(txt => (
            <label style={{ marginLeft: "auto", fontWeight: "bold" }}>
              {txt}
            </label>
          ))}
        </div>
      );
    } else {
      return (
        <label style={{ marginLeft: "auto", fontWeight: "bold" }}>
          {this.props.Data}
        </label>
      );
    }
  }
}

export default ArrayDisplay;
