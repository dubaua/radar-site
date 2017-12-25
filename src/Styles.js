import styled from "styled-components";
import Colors from "./Colors";

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: lighter;
  margin: 0;
`;

export const Header = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 24px;
`;

export const Tags = styled.div`
  flex-grow: 1;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  margin-left: 32px;
  &:last-child {
    flex-grow: 0;
    margin-left: auto;
  }
`;

export const Section = styled.section`
  margin-top: 48px;
  margin-bottom: ${props => (props.last ? 0 : "80px")};
`;

export const Toggle = styled.button`
  font-size: 18px;
  cursor: pointer;
  position: relative;
  background: none;
  border-width: 0 0 1px 0;
  color: inherit;
  font-family: inherit;
  padding: 4px 8px;
  border-color: ${props => (props.active ? Colors.scarlet : "transparent")};
  &:hover {
    color: ${Colors.scarlet};
  }
`;
