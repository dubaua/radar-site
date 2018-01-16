import React, { Component } from "react";
import Colors from "../Colors";
import { Link as RLink } from "react-router-dom";
import RootPath from "../RootPath";
import styled from "styled-components";

const Link = styled(RLink)`
  display: block;
  text-decoration: none;
  line-height: 0;
  margin: 8px 0;
  position: relative;
`;

const Cover = styled.img`
  max-width: 100%;
`;

const Overlay = styled.div`
  background: ${Colors.woodsmoke};
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: 0;
  padding: 16px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 16px;
`;

const Prescription = styled.p`
  font-size: 15px;
  line-height: 1.3;
`;

class Card extends Component {
  render() {
    const card = this.props.data;
    return (
      <Link to={"/works/" + card.slug}>
        <Cover src={RootPath + card.cover.path} />
        <Overlay>
          <Title>{card.title}</Title>
          <Prescription>{card.prescription}</Prescription>
        </Overlay>
      </Link>
    );
  }
}

export default Card;
