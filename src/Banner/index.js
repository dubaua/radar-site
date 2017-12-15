import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

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

const Description = styled.div`
  font-size: 20px;
  line-height: 1.3;
  max-width: 420px;
`;

class Banner extends Component {
  render() {
    const banner = this.props.data;
    const style = {
      backgroundImage: "url(" + banner.imageUrl + ")"
    };
    return (
      <Background inverse={banner.isInverse} style={style}>
        <Grid>
          <Spotlight>
            <Title>{banner.title}</Title>
            <Description>{banner.description}</Description>
          </Spotlight>
        </Grid>
      </Background>
    );
  }
}

export default Banner;
