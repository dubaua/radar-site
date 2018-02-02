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

  .video {
    position: relative;
    height: 0;
    padding-bottom: 56%;

    & iframe {
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

const HTML = ({ children }) => {
  let wrapped;
  if (~children.indexOf("<iframe")) {
    const preffixed = children.replace("<iframe", '<div class="video"><iframe');
    wrapped = preffixed.replace("</iframe>", "</iframe></div>");
  } else {
    wrapped = children;
  }
  return <Wrapper>{renderHTML(wrapped)}</Wrapper>;
};

export default HTML;
