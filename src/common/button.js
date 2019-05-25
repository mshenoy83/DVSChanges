import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className={this.props.classes} onClick={this.props.handleClick}>
        {this.props.buttonName}
      </div>
    );
  }
}

export default Button;
