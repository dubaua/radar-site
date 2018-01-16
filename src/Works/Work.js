import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import renderHTML from "react-render-html";
import _ from "lodash";
import RootPath from "../RootPath";
import Banner from "../Banner";
import "swiper/dist/css/swiper.min.css";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";

const Case = styled.section`
  margin: 24px 0;
`;

const Block = styled.div``;

const About = styled.section`
  background: #efeff1;
  min-width: 250px;
  padding: 48px 0;
`;

class Work extends React.Component {
  state = {
    work: null
  };

  componentWillMount() {
    const slug = this.props.location.pathname.replace(/\/works\//g, "");
    console.log(slug);
    fetch(
      `http://radarapi.dubaua.ru/api/collections/get/works?token=${
        process.env.REACT_APP_COCKPIT_KEY
      }`
    )
      .then(response => response.json())
      .then(blob => {
        const work = _.find(blob.entries, work => work.slug === slug);
        console.log(work);
        this.setState({ work: work });
      });
  }

  render() {
    const work = this.state.work;
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
      paginationCustomizedClass: "swiper-pagination-white"
    };
    if (work) {
      return (
        <div>
          <Banner data={work} />
          <Case>
            <Grid>
              <Row>
                <Col xs={4}>{renderHTML(work.about)}</Col>
                <Col xs={8}>
                  <img src={RootPath + work.logo.path} alt={work.title} />
                </Col>
              </Row>

              {work.layout.map((section, index) => (
                <Grid key={index.toString()}>
                  <Row>
                    {section.columns.map((column, index2) => (
                      <Col
                        xs={12 / section.columns.length}
                        key={index2.toString()}
                      >
                        {column.children.map((block, index3) => (
                          <div key={index3.toString()}>
                            {block.component === "gallery" ? (
                              <Swiper
                                {...spotlightParams}
                                pagination={spotlightParams.pagination}
                              >
                                {block.settings.gallery.map((slide, index4) => (
                                  <div
                                    className="swiper-slide"
                                    key={index4.toString()}
                                  >
                                    <img
                                      src={RootPath + slide.path}
                                      alt={
                                        work.title +
                                        index +
                                        index2 +
                                        index3 +
                                        index4
                                      }
                                    />
                                  </div>
                                ))}
                              </Swiper>
                            ) : (
                              <img
                                src={RootPath + block.settings.image.path}
                                alt={work.title + " " + (index + index2)}
                              />
                            )}
                          </div>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </Grid>
              ))}
              <Row>
                <Col xsOffset={3} xs={3}>
                  {renderHTML(work.team)}
                </Col>
                <Col xsOffset={3} xs={3}>
                  {work.tags.map((tag, index) => (
                    <Link to={"/works?tag=" + tag} key={index.toString()}>
                      {tag.display}
                    </Link>
                  ))}
                  Поделиться
                </Col>
              </Row>
            </Grid>
          </Case>
          <About>
            <Grid>
              <Row>
                <Col xs={3}>
                  <img src={work.clientLogoUrl} alt={work.title} />
                </Col>
                <Col xs={6}>{work.clientAbout}</Col>
              </Row>
            </Grid>
          </About>}
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Work;
