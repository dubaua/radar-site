import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Page, Section, Title } from "../Styles";
import Footer from "../Footer";
import styled from "styled-components";

const Header = styled.div`
  margin-bottom: 24px;
`;

const Client = styled.div`
  line-height: 0;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

class Clients extends React.Component {
  state = {
    clients: null,
    about: ""
  };

  componentWillMount() {
    fetch(
      `http://radarapi.dubaua.ru/api/collections/get/clients?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ clients: blob.entries });
      });

    fetch(
      `http://radarapi.dubaua.ru/api/regions/data/aboutClients?token=${
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
                  <Title>Наши клиенты</Title>
                </Col>
                <Col xs={5}>
                  <p>Текст о клиентах</p>
                </Col>
              </Row>
            </Header>
            <Row>
              {this.state.clients &&
                this.state.clients.map((client, index) => (
                  <Col xs={6} sm={4} md={3} lg={2} key={index.toString()}>
                    <Client>
                      <Logo
                        src={"http://radarapi.dubaua.ru/" + client.logo.path}
                        alt={client.name}
                      />
                    </Client>
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

export default Clients;
