import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Route, Link as RLink } from "react-router-dom";
import { Title, Header, Section, Tags, Toggle } from "../Styles";
import "swiper/dist/css/swiper.min.css";
import Card from "../Works/Card";
import Filter from "../Works/Filter";
import Swiper from "react-id-swiper";
import Colors from "../Colors";
import Banner from "../Banner";
import Locations from "../Contact/Locations";
import Footer from "../Footer";
import styled from "styled-components";
import RootPath from "../RootPath";

const Wrapper = styled.div``;

const Client = styled.img`
  max-width: 100%;
  height: auto;
`;

const Button = styled(RLink)`
  border: 1px solid ${Colors.scarlet};
  padding: 10px 20px;
  color: ${Colors.ebony};
  font-size: 14px;
  border-radius: 30px;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background: ${Colors.scarlet};
  }
`;

class Home extends Component {
  state = {
    banners: null,
    works: null,
    tags: null,
    clients: null,
    currentTag: "Все"
  };

  componentDidMount() {
    fetch(
      `${RootPath}api/collections/get/works?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({
          works: blob.entries,
          banners: blob.entries.filter(work => work.isFeatured)
        });
      });

    fetch(
      `${RootPath}api/collections/get/tags?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ tags: blob.entries });
      });

    fetch(
      `${RootPath}api/collections/get/clients?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ clients: blob.entries });
      });
  }

  toggleFilter = tag => {
    this.setState(prevState => ({
      ...prevState,
      currentTag: prevState.currentTag === tag ? "Все" : tag
    }));
  };

  resetFilters = () => {
    this.setState({ currentTag: "Все" });
  };
  render() {
    const spotlightParams = {
      speed: 400,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      paginationCustomizedClass: "swiper-pagination-white",
      nextButtonCustomizedClass: "swiper-button-white",
      prevButtonCustomizedClass: "swiper-button-white"
    };
    const clientsParams = {
      speed: 400,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        575: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 3
        },
        991: {
          slidesPerView: 4
        }
      },
      slidesPerView: 6
    };
    return (
      <Wrapper>
        <Swiper
          {...spotlightParams}
          pagination={spotlightParams.pagination}
          navigation={spotlightParams.navigation}
        >
          {this.state.banners &&
            this.state.banners.map((banner, index) => (
              <div className="swiper-slide" key={index.toString()}>
                <Banner data={banner} />
              </div>
            ))}
        </Swiper>
        <Section>
          <Grid>
            <Header>
              <Title>Работы</Title>
              <Tags>
                <Toggle
                  onClick={this.resetFilters}
                  active={this.state.currentTag === "Все"}
                >
                  Все
                </Toggle>
                {this.state.tags &&
                  this.state.tags.map((tag, index) => (
                    <Filter
                      key={index.toString()}
                      onToggle={this.toggleFilter}
                      filter={tag}
                      currentTag={this.state.currentTag}
                    />
                  ))}
              </Tags>
              <Route
                exact
                path="/"
                render={() => <Button to="works">Все работы</Button>}
              />
            </Header>
            <Row>
              {this.state.works &&
                this.state.works.map((work, index) => (
                  <Col xs={6} md={4} lg={3} key={index.toString()}>
                    <Card data={work} />
                  </Col>
                ))}
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Title>Наши клиенты</Title>
            {this.state.clients && (
              <Swiper {...clientsParams}>
                {this.state.clients.map(
                  (client, index) =>
                    !client.isHidden && (
                      <div className="swiper-slide" key={index.toString()}>
                        <Client
                          src={RootPath + client.logo.path}
                          alt={client.title}
                        />
                      </div>
                    )
                )}
              </Swiper>
            )}
          </Grid>
        </Section>
        <Section last>
          <Locations />
        </Section>
        <Footer />
      </Wrapper>
    );
  }
}

export default Home;
