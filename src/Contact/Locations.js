import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import renderHTML from "react-render-html";
import { Title, Header, Section, Toggle } from "../Styles";
import GoogleMapReact from "google-map-react";
import Colors from "../Colors";
import styled from "styled-components";
import mapOptions from "./mapOptions";

const Location = styled.div`
  font-size: 18px;
  display: flex;
  align-items: baseline;
  margin-left: 32px;
`;

const Address = styled.address`
  font-style: normal;
  margin-left: 32px;
  & a {
    display: block;
    color: inherit;
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
        <Grid>
          {this.state.locations &&
            this.state.currentLocation && (
              <Header>
                <Title>Контакты</Title>
                <Location>
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
                </Location>
                <Address>
                  {renderHTML(this.state.currentLocation.address)}
                </Address>
                <Address>
                  <a href={"tel:+" + this.state.currentLocation.phoneLink}>
                    {this.state.currentLocation.phone}
                  </a>
                  <a href={"mailto:" + this.state.currentLocation.email}>
                    {this.state.currentLocation.email}
                  </a>
                </Address>
              </Header>
            )}
        </Grid>
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
