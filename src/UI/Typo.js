import React from "react";
import renderHTML from "react-render-html";
import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin-top: 0;
  }
  * + * {
    margin-top: 1em;
  }
`;

const Typo = ({ children }) => <Wrapper>{renderHTML(children)}</Wrapper>;

export default Typo;
