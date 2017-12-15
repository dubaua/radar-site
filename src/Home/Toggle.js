import styled from "styled-components";
import Colors from "../Colors";

export default styled.button`
  font-size: 18px;
  cursor: pointer;
  margin-left: 16px;
  position: relative;
  background: none;
  border-width: 0 0 1px 0;
  color: inherit;
  font-family: inherit;
  padding: 4px 0;
  border-color: ${props => (props.active ? Colors.scarlet : "transparent")};
  &:hover {
    border-color: ${Colors.scarlet};
  }
  &:focus {
    box-shadow: none !important;
  }
`;
