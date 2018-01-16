import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import RootPath from "../RootPath";

const Background = styled.div`
  background-color: ${props => (props.inverse ? "white" : "black")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${props => (props.inverse ? "black" : "white")};
`;

const Spotlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: lighter;
  margin-bottom: 40px;
  max-width: 420px;
`;

const Prescription = styled.div`
  font-size: 20px;
  line-height: 1.3;
  max-width: 420px;
`;

class Banner extends Component {
  render() {
    const banner = this.props.data;
    const style = {
      backgroundImage: "url(" + RootPath + banner.header.path + ")"
    };
    return (
      <Background inverse={banner.isInverse} style={style}>
        <Grid>
          <Spotlight>
            <Title>{banner.title}</Title>
            <Prescription>{banner.prescription}</Prescription>
          </Spotlight>
        </Grid>
      </Background>
    );
  }
}

export default Banner;
