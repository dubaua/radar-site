import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import queryString from "query-string";
import _ from "lodash";
import { Lg } from "../Media";
import { Page, Section, Title, Header, Tags } from "../Styles";
import Colors from "../Colors";
import Card from "./Card";
import Footer from "../Footer";
import styled from "styled-components";

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

class Works extends Component {
  state = {
    tags: null,
    works: null,
    currentTag: null,
    filteredWorks: null
  };

  componentDidMount() {
    fetch(
      `http://radarapi.dubaua.ru/api/collections/get/works?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ works: blob.entries });
      });

    fetch(
      `http://radarapi.dubaua.ru/api/collections/get/tags?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        this.setState({ tags: blob.entries });
      });
  }

  render() {
    console.log("render");
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
    return (
      <Page>
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
                        isActive={() => tag.slug === currentTag}
                        key={index.toString()}
                      >
                        {tag.title}
                      </Toggle>
                    ))
                  ) : (
                    <div>Loading</div>
                  )}
                </Tags>
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
        <Footer />
      </Page>
    );
  }
}

export default Works;
