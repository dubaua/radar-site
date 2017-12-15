import React from "react";
import GoogleMapReact from "google-map-react";
import Colors from "../Colors";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 610px;
`;

const Radar = styled.div`
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 0 0 12px ${Colors.scarlet};
`;

class GoogleMap extends React.Component {
  render() {
    const mapOptions = {
      disableDefaultUI: true,
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
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
          center={this.props.center}
          zoom={this.props.zoom}
          options={mapOptions}
        >
          <Radar lat={this.props.center.lat} lng={this.props.center.lng} />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}
export default GoogleMap;
