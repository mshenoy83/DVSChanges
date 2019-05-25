import React from "react";
import Select from "react-select";

class Dropdown extends React.Component {
  render() {
    var inputprops = {
      onChange: this.props.handleChange,
      options: this.props.data.map((model, index) => {
        return {
          label: model.name,
          value: model.name,
          key: index
        };
      })
    };

    // if (this.props.SelectedValue) {
    //   inputprops.value = this.props.SelectedValue;
    // }

    return (
      <div className="validation-tag">
        <label>State Issued</label>
        <br />
        <div id="customSelect" className={this.props.divclasses}>
          <Select {...inputprops} />
        </div>
      </div>
    );
  }
}

export default Dropdown;
