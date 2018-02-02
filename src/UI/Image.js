import React from "react";
import styled from "styled-components";

const Preview = styled.div`
  line-height: 0;
  height: 100%;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const Image = ({ src, alt }) => (
  <Preview>
    <img src={"http://radarapi.dubaua.ru/" + src} alt={alt} />
  </Preview>
);

export default Image;
