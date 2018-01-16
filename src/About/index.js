import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import renderHTML from "react-render-html";
import { Title } from "../Styles";
import Footer from "../Footer";
import styled from "styled-components";
import backgroundImage from "./about-bg.jpg";
import RootPath from "../RootPath";

const Page = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  flex-grow: 1;
  padding-top: calc(50px + 15vh);
  color: white;
  & p {
    line-height: 1.5;
  }
`;

class About extends React.Component {
  state = {
    title: "",
    column1: "",
    column2: ""
  };

  componentWillMount() {
    fetch(
      `${RootPath}api/regions/data/aboutUs?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({
          title: blob.title,
          column1: blob.column1,
          column2: blob.column2
        });
      });
  }

  render() {
    return (
      <Page>
        <Content>
          <Grid>
            <Row>
              <Col xs={12}>
                <Title>{this.state.title}</Title>
              </Col>
              <Col xs={12} lg={5}>
                {renderHTML(this.state.column1)}
              </Col>
              <Col xs={12} lg={5}>
                {renderHTML(this.state.column2)}
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer />
      </Page>
    );
  }
}

export default About;
