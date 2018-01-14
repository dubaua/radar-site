import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Page, Section, Title } from "../Styles";
import Footer from "../Footer";
import styled from "styled-components";

const clients = [
  {
    imageUrl: require("./img/01.jpg"),
    name: "Client 01"
  },
  {
    imageUrl: require("./img/02.jpg"),
    name: "Client 02"
  },
  {
    imageUrl: require("./img/03.jpg"),
    name: "Client 03"
  },
  {
    imageUrl: require("./img/04.jpg"),
    name: "Client 04"
  },
  {
    imageUrl: require("./img/05.jpg"),
    name: "Client 05"
  },
  {
    imageUrl: require("./img/06.jpg"),
    name: "Client 06"
  },
  {
    imageUrl: require("./img/07.jpg"),
    name: "Client 07"
  },
  {
    imageUrl: require("./img/08.jpg"),
    name: "Client 08"
  },
  {
    imageUrl: require("./img/09.jpg"),
    name: "Client 09"
  },
  {
    imageUrl: require("./img/10.jpg"),
    name: "Client 10"
  },
  {
    imageUrl: require("./img/11.jpg"),
    name: "Client 11"
  },
  {
    imageUrl: require("./img/12.jpg"),
    name: "Client 12"
  },
  {
    imageUrl: require("./img/13.jpg"),
    name: "Client 13"
  },
  {
    imageUrl: require("./img/14.jpg"),
    name: "Client 14"
  },
  {
    imageUrl: require("./img/15.jpg"),
    name: "Client 15"
  },
  {
    imageUrl: require("./img/16.jpg"),
    name: "Client 16"
  },
  {
    imageUrl: require("./img/17.jpg"),
    name: "Client 17"
  },
  {
    imageUrl: require("./img/18.jpg"),
    name: "Client 18"
  },
  {
    imageUrl: require("./img/19.jpg"),
    name: "Client 19"
  },
  {
    imageUrl: require("./img/20.jpg"),
    name: "Client 20"
  },
  {
    imageUrl: require("./img/21.jpg"),
    name: "Client 21"
  },
  {
    imageUrl: require("./img/22.jpg"),
    name: "Client 22"
  },
  {
    imageUrl: require("./img/23.jpg"),
    name: "Client 23"
  },
  {
    imageUrl: require("./img/24.jpg"),
    name: "Client 24"
  },
  {
    imageUrl: require("./img/25.jpg"),
    name: "Client 25"
  },
  {
    imageUrl: require("./img/26.jpg"),
    name: "Client 26"
  },
  {
    imageUrl: require("./img/27.jpg"),
    name: "Client 27"
  },
  {
    imageUrl: require("./img/28.jpg"),
    name: "Client 28"
  },
  {
    imageUrl: require("./img/29.jpg"),
    name: "Client 29"
  },
  {
    imageUrl: require("./img/30.jpg"),
    name: "Client 30"
  },
  {
    imageUrl: require("./img/31.jpg"),
    name: "Client 31"
  },
  {
    imageUrl: require("./img/32.jpg"),
    name: "Client 32"
  },
  {
    imageUrl: require("./img/33.jpg"),
    name: "Client 33"
  },
  {
    imageUrl: require("./img/34.jpg"),
    name: "Client 34"
  },
  {
    imageUrl: require("./img/35.jpg"),
    name: "Client 35"
  },
  {
    imageUrl: require("./img/36.jpg"),
    name: "Client 36"
  },
  {
    imageUrl: require("./img/37.jpg"),
    name: "Client 37"
  },
  {
    imageUrl: require("./img/38.jpg"),
    name: "Client 38"
  },
  {
    imageUrl: require("./img/39.jpg"),
    name: "Client 39"
  },
  {
    imageUrl: require("./img/40.jpg"),
    name: "Client 40"
  },
  {
    imageUrl: require("./img/41.jpg"),
    name: "Client 41"
  },
  {
    imageUrl: require("./img/42.jpg"),
    name: "Client 42"
  },
  {
    imageUrl: require("./img/43.jpg"),
    name: "Client 43"
  },
  {
    imageUrl: require("./img/44.jpg"),
    name: "Client 44"
  },
  {
    imageUrl: require("./img/45.jpg"),
    name: "Client 45"
  },
  {
    imageUrl: require("./img/46.jpg"),
    name: "Client 46"
  },
  {
    imageUrl: require("./img/47.jpg"),
    name: "Client 47"
  },
  {
    imageUrl: require("./img/48.jpg"),
    name: "Client 48"
  }
];

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
    clients: null
  };

  componentWillMount() {
    fetch("http://radar.dubaua.ru/api/server.php?getClients")
      .then(res => res.json())
      .then(response => {
        this.setState({ clients: response.clients });
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
                      <Logo src={client.imageUrl} alt={client.name} />
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
