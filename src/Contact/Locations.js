import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import renderHTML from "react-render-html";
import { Title, Section, Toggle } from "../Styles";
import GoogleMapReact from "google-map-react";
import Colors from "../Colors";
import styled from "styled-components";
import mapOptions from "./mapOptions";

const Header = styled(Row)`
  align-items: baseline;
  margin-bottom: 32px;
`;

const Filter = styled.div`
  margin: 16px -8px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Address = styled.address`
  font-style: normal;
`;

const Contact = styled.address`
  font-style: normal;
  & a {
    display: block;
    color: inherit;
  }
  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;

const GoogleMap = styled.div`
  height: 610px;
`;

const Radar = styled.div`
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 0 0 12px ${Colors.scarlet};
`;

class Locations extends Component {
  state = {
    locations: undefined,
    currentLocation: undefined
  };

  componentWillMount() {
    fetch(
      `http://radarapi.dubaua.ru/api/collections/get/locations?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({
          locations: blob.entries,
          currentLocation: blob.entries[0]
        });
      });
  }

  render() {
    return (
      <Section last>
        {this.state.locations &&
          this.state.currentLocation && (
            <Grid>
              <Header>
                <Col xs={12} md={3} lg={2}>
                  <Title>Контакты</Title>
                </Col>
                <Col xs={12} md={9} lg={2} xl={3}>
                  <Filter>
                    {this.state.locations.map((location, index) => (
                      <Toggle
                        key={index.toString()}
                        onClick={() => {
                          this.setState({
                            currentLocation: location
                          });
                        }}
                        active={
                          this.state.currentLocation.title === location.title
                        }
                      >
                        {location.title}
                      </Toggle>
                    ))}
                  </Filter>
                </Col>
                <Col xs={12} md={9} lg={6} xl={5}>
                  <Address>
                    {renderHTML(this.state.currentLocation.address)}
                  </Address>
                </Col>
                <Col xs={12} md={3} lg={2}>
                  <Contact>
                    <a href={"tel:+" + this.state.currentLocation.phoneLink}>
                      {this.state.currentLocation.phone}
                    </a>
                    <a href={"mailto:" + this.state.currentLocation.email}>
                      {this.state.currentLocation.email}
                    </a>
                  </Contact>
                </Col>
              </Header>
            </Grid>
          )}
        <GoogleMap>
          {this.state.currentLocation && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
              center={this.state.currentLocation.coords}
              zoom={this.state.currentLocation.zoom}
              options={mapOptions}
            >
              <Radar
                lat={this.state.currentLocation.coords.lat}
                lng={this.state.currentLocation.coords.lng}
              />
            </GoogleMapReact>
          )}
        </GoogleMap>
      </Section>
    );
  }
}

export default Locations;
