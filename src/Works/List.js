import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import queryString from "query-string";
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
    works: [
      {
        previewUrl: require("./img/yasno.png"),
        slug: "yasnosolnishko",
        tags: ["design", "event"],
        title: "Ясно солнышко",
        description:
          "Серия специальных мероприятий с интеграцией в дни города для бренда каш «Ясно солнышко»."
      },
      {
        previewUrl: require("./img/21vek.jpg"),
        slug: "city21vek-2",
        tags: ["design"],
        title: "Сити XXI век",
        description: "Рекламная кампания"
      },
      {
        previewUrl: require("./img/glycelax.png"),
        slug: "glicelax",
        tags: ["design", "digital"],
        title: "Glicelax",
        description: "Разработка продуктового сайта для препарата «Глицелакс»"
      },
      {
        previewUrl: require("./img/globus.jpg"),
        slug: "globus",
        tags: ["design", "branding"],
        title: "Globus",
        description:
          "Key visual для десятилетия сети гипермаркетов Globus в России"
      },
      {
        previewUrl: require("./img/voyage.jpg"),
        slug: "voyage",
        tags: ["design", "branding"],
        title: "Voyage",
        description: "Разработка бренда производителя антисептических средств"
      },
      {
        previewUrl: require("./img/scovo.jpg"),
        slug: "scovo-black-diamond",
        tags: ["design", "branding"],
        title: "Scovo",
        description:
          "Дизайн-концепция для упаковки сковородок серии Black Diamond"
      },
      {
        previewUrl: require("./img/optic.jpg"),
        slug: "opticcenter",
        tags: ["design", "branding"],
        title: "ОптикЦентр",
        description:
          "Репозициониорвание бренда «ОптикЦентр», запуск рекламной кампании"
      },
      {
        previewUrl: require("./img/greennation.jpg"),
        slug: "greennation",
        tags: ["design", "branding"],
        title: "Greennation",
        description: "Разработка бренда производителя зерновых культур"
      }
    ]
  };

  componentDidMount() {
    fetch(
      `http://dev.dubaua.ru/radar/cockpit-master/api/collections/get/tags?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(res => res.json())
      .then(tags => {
        this.setState({ tags: tags.entries });
      });
  }

  render() {
    const tags = this.state.tags;
    const match = this.props.match;
    const currentTag = queryString.parse(this.props.location.search).tag;
    const filteredWorks = this.state.works.filter(
      work => (currentTag ? work.tags.indexOf(currentTag) >= 0 : true)
    );
    return (
      <Page>
        <Section>
          <Grid>
            <Header>
              <Title>Работы</Title>
              <Tags>
                <Toggle
                  to={{ pathname: match.url }}
                  isActive={() => !currentTag}
                >
                  Все
                </Toggle>
                {tags ? (
                  tags.map((tag, index) => (
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
            </Header>
            <Row>
              {filteredWorks.map((work, index) => (
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
