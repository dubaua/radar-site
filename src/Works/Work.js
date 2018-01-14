import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
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

const Layout = styled.div`
  line-height: 0;
`;

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
    // fetch(
    //   `http://dev.dubaua.ru/radar/cockpit-master/api/collections/get/tags?token=${
    //     process.env.REACT_APP_COCKPIT_KEY
    //   }`
    // )
    //   .then(res => res.json())
    //   .then(tags => {
    //     this.setState({ tags: tags.entries });
    //   });

    // fake fetching...
    this.setState({
      work: {
        title: "Ясно солнышко",
        imageUrl: require("./img/case/head.png"),
        slug: "yasno-solnishko",
        description:
          "Серия специальных мероприятий с интеграцией в дни города для бренда каш «Ясно солнышко».",
        about:
          " Задача: <br> Разработать механики мероприятий, интегрированных в дни города Тюмени, Екатеринбурга и Тюмени. Города являются новыми рынками для торговой марки, поэтому было необходимо познакомить аудиторию с кашами «Ясно солнышко».<br> Решение: <br> Агентство реализовало механику под ключ, то есть разработало креатив, дизайн всех рекламных материалов и элементов оформления мероприятия, а также взяло на себя непосредственно саму организацию.<br> <br> Концепция «Сила и здоровье в каше» направлена на то, чтобы в гиперболизированной форме показать, сколько сил нам способны придать злаки. Отсюда и фишка мероприятия с использованием надувных тяжестей, которые ярко и наглядно демонстрируют «последствия употребления».<br> <br> В общей сложности наши мероприятия в 3 городах посетило примерно 35 – 40 тысяч человек, качество каши оценило 3 тысячи, а сотни фото с хэштегами мероприятия разлетелись по соцсетям.<br>",
        startDate: null,
        endDate: null,
        // or dates as string
        dates: "Июль, 2017 — Август, 2017",
        logoUrl: require("./img/case/logo.png"),
        layout: [
          {
            width: 12,
            content: [
              [
                require("./img/case/pic-1_1.png"),
                require("./img/case/pic-1_2.png"),
                require("./img/case/pic-1_3.png"),
                require("./img/case/pic-1_4.png"),
                require("./img/case/pic-1_5.png"),
                require("./img/case/pic-1_6.png")
              ]
            ]
          },

          {
            width: 6,
            content: [
              [
                require("./img/case/pic-2_1.png"),
                require("./img/case/pic-2_2.png"),
                require("./img/case/pic-2_3.png")
              ]
            ]
          },
          {
            width: 6,
            content: [
              [
                require("./img/case/pic-3_1.png"),
                require("./img/case/pic-3_2.png"),
                require("./img/case/pic-3_3.png"),
                require("./img/case/pic-3_4.png")
              ],
              [require("./img/case/pic-4.png")]
            ]
          }
        ],
        team:
          "Account manager: Юлия Храмова <br> New business manager: Арина Махарани <br> New business director: Инна Петрачкова <br> Copywriter: Иван Мартынов <br> Designer: Надежда Брауде",
        tags: ["design", "event"],
        clientLogoUrl: require("./img/case/about.png"),
        clientAbout:
          "ПАО «Петербургский мельничный комбинат» является одним из ведущих производств пищевого холдинга «Аладушкин Групп» по производству и реализации муки и овсяных хлопьев."
      }
    });
  }

  render() {
    const work = this.state.work;
    const banner = {
      title: work.title,
      imageUrl: work.imageUrl,
      slug: work.slug,
      description: work.description
    };
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
    return (
      <div>
        <Banner data={banner} />
        <Case>
          <Grid>
            <Row>
              <Col xs={4}>{work.about}</Col>
              <Col xs={8}>
                <img src={work.logoUrl} alt={work.title} />
              </Col>
            </Row>
            <Layout>
              <Row>
                {work.layout.map((pad, index) => (
                  <Col key={index.toString()} xs={pad.width}>
                    {pad.content.map((block, index2) => (
                      <Block key={index2.toString()}>
                        {block.length > 1 ? (
                          <Swiper
                            {...spotlightParams}
                            pagination={spotlightParams.pagination}
                          >
                            {block.map((banner, index3) => (
                              <div
                                className="swiper-slide"
                                key={index3.toString()}
                              >
                                <img
                                  src={banner}
                                  alt={
                                    work.title + " " + (index + index2 + index3)
                                  }
                                />
                              </div>
                            ))}
                          </Swiper>
                        ) : (
                          <img
                            src={block[0]}
                            alt={work.title + " " + (index + index2)}
                          />
                        )}
                      </Block>
                    ))}
                  </Col>
                ))}
              </Row>
            </Layout>
            <Row>
              <Col xsOffset={3} xs={3}>
                {work.team}
              </Col>
              <Col xsOffset={3} xs={3}>
                {work.tags.map((tag, index) => (
                  <Link to={"/works?tag=" + tag} key={index.toString()}>
                    {tag}
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
        </About>
        <Footer />
      </div>
    );
  }
}
export default Work;
