import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import _ from "lodash";
// import Spoiler from "../UI/Spoiler";
import Image from "../UI/Image";
import Gallery from "../UI/Gallery";
import HTML from "../UI/HTML";
import Typographic from "../UI/Typographic";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";
import Colors from "../Colors";
import { bp, Md } from "../Media";

const Case = styled.section`
  margin: 60px 0;
`;

const Description = styled(Col)`
  position: relative;
  z-index: 20;
`;

const Spoiler = styled.div`
  @media screen and (min-width: ${bp.md}px) {
    background: white;
    box-sizing: border-box;
    height: auto;
    overflow: ${props => (props.active ? "visible" : "hidden")};
    padding-bottom: 40px;
    position: absolute;
    top: 0;
    z-index: 1;
    height: ${props => (props.active ? "auto" : "250px")};
  }
  @media screen and (min-width: ${bp.lg}px) {
    height: ${props => (props.active ? "auto" : "438px")};
  }
  @media screen and (min-width: ${bp.xl}px) {
    height: ${props => (props.active ? "auto" : "470px")};
  }
`;

const Toggle = styled.div`
  background: white;
  bottom: 0;
  color: ${Colors.dust};
  cursor: pointer;
  padding: 20px 0;
  position: absolute;
  text-decoration: underline;
  width: 100%;
  z-index: 2;
  @media screen and (min-width: ${bp.xl}px) {
    padding: 16px 0;
  }
`;

const Section = styled.div`
  margin-bottom: 16px;

  & img {
    /* object-fit: cover;
    width: 100%;
    height: 100%; */
  }
`;

const Dates = styled.time`
  display: block;
  color: ${Colors.dust};
  margin: 16px 0;
  font-size: 16px;
`;

const Logo = styled.div`
  text-align: right;
  margin-bottom: 16px;
`;

const Client = styled.section`
  background: #efeff1;
  min-width: 250px;
  padding: 48px 0;
`;

const ClientLogo = styled.div`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Team = styled.div`
  color: ${Colors.dust};
`;

const Tag = styled(Link)`
  color: ${Colors.dust};
  cursor: pointer;
  margin-right: 0.4em;
  text-transform: lowercase;
`;

class Work extends React.Component {
  state = {
    work: null,
    isOpen: false
  };

  componentWillMount() {
    // console.log(this.props.match);
    const slug = this.props.match.params.workId;

    const urls = [
      "http://radarapi.dubaua.ru/api/collections/get/works",
      "http://radarapi.dubaua.ru/api/collections/get/tags"
    ];

    const grabContent = url =>
      fetch(url + `?token=${process.env.REACT_APP_COCKPIT_KEY}`)
        .then(response => response.json())
        .then(blob => blob.entries);

    Promise.all(urls.map(grabContent)).then(response => {
      const [works, tags] = response;
      const work = _.find(works, work => work.slug === slug);
      const tagIds = work.tags.map(tag => tag._id);
      const newWork = {
        ...work,
        tags: tags.filter(tag => ~tagIds.indexOf(tag._id))
      };
      console.log(newWork);
      this.setState({ work: newWork });
    });
  }

  renderComponent(type, settings, title, index) {
    switch (type) {
      case "gallery":
        return (
          <Gallery gallery={settings.gallery} title={title} index={index} />
        );
      case "image":
        return <Image src={settings.image.path} alt={title + index} />;
      case "html":
        return <HTML>{settings.html}</HTML>;
      default:
        return <p>Неизвестный компонент</p>;
    }
  }

  render() {
    const work = this.state.work;
    if (work) {
      return (
        <div>
          <Banner data={work} />
          <Case>
            <Grid>
              <Row>
                <Description xs={12} md={6} lg={4}>
                  <Spoiler active={this.state.isOpen}>
                    <Typographic>{work.about}</Typographic>
                    <Dates>{work.dates}</Dates>
                    <Md>
                      <Toggle
                        onClick={() =>
                          this.setState({
                            isOpen: !this.state.isOpen
                          })
                        }
                      >
                        {this.state.isOpen ? "свернуть" : "Читать далее"}
                      </Toggle>
                    </Md>
                  </Spoiler>
                </Description>
                <Col xs={12} md={6} lg={8}>
                  <Logo>
                    <Image src={work.logo.path} alt={work.title} />
                  </Logo>
                </Col>
              </Row>
            </Grid>
            {work.layout.map((section, index) => (
              <Grid key={index.toString()}>
                <Row>
                  {section.columns.map((column, index2) => {
                    let width;
                    try {
                      width = JSON.parse(column.settings.style).width;
                    } catch (e) {}
                    const mdWidth = width ? width : 12 / section.columns.length;
                    return (
                      <Col xs={12} md={mdWidth} key={index2.toString()}>
                        {column.children.map((block, index3) => (
                          <Section key={index3.toString()}>
                            {this.renderComponent(
                              block.component,
                              block.settings,
                              work.title,
                              index3
                            )}
                          </Section>
                        ))}
                      </Col>
                    );
                  })}
                </Row>
              </Grid>
            ))}
            <Grid>
              <Row>
                <Col xs={12} md={3}>
                  {" "}
                </Col>
                <Col xs={12} md={6}>
                  <Team>
                    <Typographic>{work.team}</Typographic>
                  </Team>
                </Col>
                <Col xs={12} md={3}>
                  {work.tags.map((tag, index) => (
                    <Tag to={"/works?tag=" + tag.slug} key={index.toString()}>
                      #{tag.title}
                    </Tag>
                  ))}
                </Col>
              </Row>
            </Grid>
          </Case>
          <Client>
            <Grid>
              <Row>
                <Col xs={12} md={3}>
                  <ClientLogo>
                    <Image src={work.cilentLogo.path} alt={work.title} />
                  </ClientLogo>
                </Col>
                <Col xs={12} md={6}>
                  <Typographic>{work.clientAbout}</Typographic>
                </Col>
              </Row>
            </Grid>
          </Client>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Work;
