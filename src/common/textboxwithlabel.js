import React from "react";
import Cleave from "cleave.js/react";

class TextBoxWithLabel extends React.Component {
  render() {
    return (
      <div className={this.props.divclasses}>
        <label htmlFor={this.props.fieldname}>{this.props.labelname}</label>
        <br />
        <div
          className={this.props.divclasses}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Cleave
            className={this.props.inputclasses}
            id={this.props.fieldname}
            maxLength={this.props.maxlength}
            name={this.props.fieldname}
            placeholder={this.props.PlaceHolder}
            required={this.props.IsRequired}
            value={this.props.InputValue}
            options={this.props.cleaveOptions}
            onChange={event => this.props.InputHandler(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default TextBoxWithLabel;
