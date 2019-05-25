import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2 className={this.props.TitleClass}>{this.props.Title}</h2>
        {this.props.Description && (
          <div className={this.props.DescriptionClass}>
            {this.props.Description}
          </div>
        )}
      </div>
    );
  }
}

export default Header;
