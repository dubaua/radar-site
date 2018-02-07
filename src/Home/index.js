import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Route, Link as RLink } from "react-router-dom";
import { Title, Header, Section, Tags } from "../Styles";
import { Lg } from "../Media";
import "swiper/dist/css/swiper.min.css";
import Card from "../Works/Card";
import { NavLink } from "react-router-dom";
import Swiper from "react-id-swiper";
import Colors from "../Colors";
import Banner from "../Banner";
import Locations from "../Contact/Locations";
import Footer from "../Footer";
import queryString from "query-string";
import _ from "lodash";
import styled from "styled-components";

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

const QueryLink = props => (
  <NavLink
    {...props}
    to={{ ...props.to, search: queryString.stringify(props.to.query) }}
  />
);

const Toggle = styled(QueryLink)`
  background: none;
  border-bottom: 1px solid transparent;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 18px;
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  &.active {
    border-color: ${Colors.scarlet};
  }
  &:hover {
    color: ${Colors.scarlet};
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
    const urls = [
      "http://radarapi.dubaua.ru/api/collections/get/works",
      "http://radarapi.dubaua.ru/api/collections/get/tags",
      "http://radarapi.dubaua.ru/api/collections/get/clients"
    ];

    const grabContent = url =>
      fetch(url + `?token=${process.env.REACT_APP_COCKPIT_KEY}`)
        .then(response => response.json())
        .then(blob => blob.entries);

    Promise.all(urls.map(grabContent)).then(response => {
      const [works, tags, clients] = response;
      this.setState({
        works,
        tags,
        clients,
        banners: works.filter(work => work.isFeatured)
      });
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
    const match = this.props.match;
    const currentTagSlug = queryString.parse(this.props.location.search).tag;
    const currentTag = _.find(
      this.state.tags,
      tag => tag.slug === currentTagSlug
    );
    const filteredWorks =
      this.state.works &&
      this.state.works.filter(
        work =>
          currentTag
            ? _.findIndex(work.tags, tag => tag._id === currentTag._id) !== -1
            : true
      );
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
        {this.state.banners && (
          <Swiper
            {...spotlightParams}
            pagination={spotlightParams.pagination}
            navigation={spotlightParams.navigation}
          >
            {this.state.banners.map((banner, index) => (
              <div className="swiper-slide" key={index.toString()}>
                <Banner data={banner} />
              </div>
            ))}
          </Swiper>
        )}
        <Section>
          <Grid>
            <Header>
              <Title>Работы</Title>
              <Lg>
                <Tags>
                  <Toggle
                    to={{ pathname: match.url }}
                    isActive={() => !currentTag}
                  >
                    Все
                  </Toggle>
                  {this.state.tags ? (
                    this.state.tags.map((tag, index) => (
                      <Toggle
                        to={{ pathname: match.url, query: { tag: tag.slug } }}
                        isActive={() =>
                          currentTag && tag.slug === currentTag.slug
                        }
                        key={index.toString()}
                      >
                        {tag.title}
                      </Toggle>
                    ))
                  ) : (
                    <div>Loading</div>
                  )}
                </Tags>

                <Route
                  exact
                  path="/"
                  render={() => <Button to="works">Все работы</Button>}
                />
              </Lg>
            </Header>
            <Row>
              {filteredWorks &&
                filteredWorks.map((work, index) => (
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
                          src={"http://radarapi.dubaua.ru/" + client.logo.path}
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
