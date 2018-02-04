import React from "react";
import renderHTML from "react-render-html";
import styled from "styled-components";

const Wrapper = styled.div`
  * {
    margin-top: 0;
  }
  * + * {
    margin: 1.25em 0;
  }
`;

const Typographic = ({ children }) => <Wrapper>{renderHTML(children)}</Wrapper>;

export default Typographic;
