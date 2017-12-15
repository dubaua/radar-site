import React from "react";
import Toggle from "./Toggle";

class Filter extends React.Component {
  handleClick = () => {
    this.props.onToggle(this.props.filter.title);
  };

  render() {
    return (
      <Toggle
        active={this.props.filter.title === this.props.currentTag}
        onClick={this.handleClick}
      >
        {this.props.filter.title}
      </Toggle>
    );
  }
}
export default Filter;
