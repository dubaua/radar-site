import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import { Title, Header, Section, Toggle } from "../Styles";
import GoogleMapReact from "google-map-react";
import Colors from "../Colors";
import styled from "styled-components";

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

const locations = [
  {
    title: "Москва",
    address:
      "БЦ АРМА, стр. 18, оф. 4 Нижний Сусальный переулок, 5 Москва, Россия, 105064",
    phone: "+7 (495) 602-03-99",
    phoneLink: "+74956020399",
    center: {
      lat: 55.758929,
      lng: 37.664464
    },
    zoom: 17
  },
  {
    title: "Челябинск",
    address:
      "АКЦ «Челябинск Сити», офис 1209, ул. Кирова, 159, Челябинск, Россия, 454000",
    phone: "+7 (351) 211-11-50",
    phoneLink: "+73512111150",
    center: {
      lat: 55.16478990853108,
      lng: 61.40119045972824
    },
    zoom: 17
  }
];

class Locations extends Component {
  state = {
    locations: locations,
    currentLocation: locations[0]
  };
  render() {
    const mapOptions = {
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {
          stylers: [
            {
              saturation: -100
            },
            {
              gamma: 1
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "water",
          stylers: [
            {
              visibility: "on"
            },
            {
              saturation: 50
            },
            {
              gamma: 0
            },
            {
              hue: "#50a5d1"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#333333"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              weight: 0.5
            },
            {
              color: "#333333"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "labels.icon",
          stylers: [
            {
              gamma: 1
            },
            {
              saturation: 50
            }
          ]
        }
      ]
    };
    return (
      <Section last>
        <Grid>
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
                  active={this.state.currentLocation.title === location.title}
                >
                  {location.title}
                </Toggle>
              ))}
            </Location>
            <Address>{this.state.currentLocation.address}</Address>
            <Address>
              <a href={"tel:" + this.state.currentLocation.phoneLink}>
                {this.state.currentLocation.phone}
              </a>
              <a href="mailto:info@radar-online.ru">info@radar-online.ru</a>
            </Address>
          </Header>
        </Grid>
        <GoogleMap>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            center={this.state.currentLocation.center}
            zoom={this.state.currentLocation.zoom}
            options={mapOptions}
          >
            <Radar
              lat={this.state.currentLocation.center.lat}
              lng={this.state.currentLocation.center.lng}
            />
          </GoogleMapReact>
        </GoogleMap>
      </Section>
    );
  }
}

export default Locations;
