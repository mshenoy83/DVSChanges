import React from "react";
import Select from "react-select";

class Dropdown extends React.Component {
  render() {
    var inputprops = {
      onChange: this.props.handleChange,
      options: this.props.data.map(model => {
        return {
          label: model.name,
          value: model.name,
          key: model.id
        };
      })
    };

    return (
      <div className="validation-tag">
        <label>State Issued</label>
        <br />
        <div id="customSelect" className={this.props.divclasses}>
          <Select
            value={inputprops.options.filter(
              ({ value }) => value === this.props.SelectedValue
            )}
            {...inputprops}
          />
        </div>
      </div>
    );
  }
}

export default Dropdown;
