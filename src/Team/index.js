import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import renderHTML from "react-render-html";
import { Page, Section, Title } from "../Styles";
import Colors from "../Colors";
import Footer from "../Footer";
import RootPath from "../RootPath";
import styled from "styled-components";

const Header = styled.div`
  margin-bottom: 24px;
  & a {
    color: inherit;
  }
`;

const Member = styled.div`
  position: relative;
  line-height: 0;
  margin-bottom: 16px;
`;

const Photo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  background: #000;
  background: ${Colors.woodsmoke};
  bottom: 0;
  color: white;
  left: 0;
  line-height: 1;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Name = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 10px;
  width: 0;
`;

const Position = styled.div`
  font-size: 14px;
`;

class Team extends React.Component {
  state = {
    team: null,
    about: ""
  };

  componentWillMount() {
    fetch(
      `${RootPath}api/collections/get/team?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ team: blob.entries });
      });

    fetch(
      `${RootPath}api/regions/data/aboutTeam?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ about: blob.content });
      });
  }

  render() {
    return (
      <Page>
        <Section>
          <Grid>
            <Header>
              <Row middle="xs">
                <Col xs={7}>
                  <Title>Команда</Title>
                </Col>
                <Col xs={5}>{renderHTML(this.state.about)}</Col>
              </Row>
            </Header>
            <Row>
              {this.state.team &&
                this.state.team.map((member, index) => (
                  <Col xs={6} sm={4} md={3} lg={2} key={index.toString()}>
                    <Member>
                      <Photo
                        src={RootPath + member.photo.path}
                        alt={member.name}
                      />
                      <Overlay>
                        <Name>{member.name}</Name>
                        <Position>{member.position}</Position>
                      </Overlay>
                    </Member>
                  </Col>
                ))}
            </Row>
          </Grid>
        </Section>
        <Footer />
      </Page>
    );
  }
}

export default Team;
