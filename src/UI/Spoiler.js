import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 16px;
  font-family: inherit;
  line-height: normal;
  color: #0f7276;
  cursor: pointer;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
`;

class Spoiler extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        {this.state.isOpen && this.props.children}
        <Button onClick={this.handleClick} active={this.state.isOpen}>
          {this.state.isOpen ? "Скрыть" : "Читать далее"}
        </Button>
      </div>
    );
  }
}
export default Spoiler;
