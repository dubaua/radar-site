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

const clients = [
  require("../img/clients/01.jpg"),
  require("../img/clients/02.jpg"),
  require("../img/clients/03.jpg"),
  require("../img/clients/04.jpg"),
  require("../img/clients/05.jpg"),
  require("../img/clients/06.jpg"),
  require("../img/clients/07.jpg"),
  require("../img/clients/08.jpg"),
  require("../img/clients/09.jpg"),
  require("../img/clients/10.jpg"),
  require("../img/clients/11.jpg"),
  require("../img/clients/12.jpg"),
  require("../img/clients/13.jpg"),
  require("../img/clients/14.jpg"),
  require("../img/clients/15.jpg"),
  require("../img/clients/16.jpg"),
  require("../img/clients/17.jpg"),
  require("../img/clients/18.jpg"),
  require("../img/clients/19.jpg"),
  require("../img/clients/20.jpg"),
  require("../img/clients/21.jpg"),
  require("../img/clients/22.jpg"),
  require("../img/clients/23.jpg"),
  require("../img/clients/24.jpg"),
  require("../img/clients/25.jpg"),
  require("../img/clients/26.jpg"),
  require("../img/clients/27.jpg"),
  require("../img/clients/28.jpg"),
  require("../img/clients/29.jpg"),
  require("../img/clients/30.jpg"),
  require("../img/clients/31.jpg"),
  require("../img/clients/32.jpg"),
  require("../img/clients/33.jpg"),
  require("../img/clients/34.jpg"),
  require("../img/clients/35.jpg"),
  require("../img/clients/36.jpg"),
  require("../img/clients/37.jpg"),
  require("../img/clients/38.jpg"),
  require("../img/clients/39.jpg"),
  require("../img/clients/40.jpg"),
  require("../img/clients/41.jpg"),
  require("../img/clients/42.jpg"),
  require("../img/clients/43.jpg"),
  require("../img/clients/44.jpg"),
  require("../img/clients/45.jpg"),
  require("../img/clients/46.jpg"),
  require("../img/clients/47.jpg"),
  require("../img/clients/48.jpg")
];

const works = [
  {
    previewUrl: "http://radar-online.ru/img/yasnosolnishko/prev.png",
    slug: "yasnosolnishko",
    tags: ["Дизайн", "События"],
    title: "Ясно солнышко",
    description:
      "Серия специальных мероприятий с интеграцией в дни города для бренда каш «Ясно солнышко»."
  },
  {
    previewUrl: "http://radar-online.ru/img/21century-2/prev.jpg",
    slug: "city21vek-2",
    tags: ["Дизайн"],
    title: "Сити XXI век",
    description: "Рекламная кампания"
  },
  {
    previewUrl: "http://radar-online.ru/img/glicelax/prev.png",
    slug: "glicelax",
    tags: ["Дизайн", "Digital"],
    title: "Glicelax",
    description: "Разработка продуктового сайта для препарата «Глицелакс»"
  },
  {
    previewUrl: "http://radar-online.ru/img/globus/prev.jpg",
    slug: "globus",
    tags: ["Дизайн", "Брендинг"],
    title: "Globus",
    description: "Key visual для десятилетия сети гипермаркетов Globus в России"
  },
  {
    previewUrl: "http://radar-online.ru/img/voyage/prev.jpg",
    slug: "voyage",
    tags: ["Дизайн", "Брендинг"],
    title: "Voyage",
    description: "Разработка бренда производителя антисептических средств"
  },
  {
    previewUrl: "http://radar-online.ru/img/scovo-black-diamond/prev.jpg",
    slug: "scovo-black-diamond",
    tags: ["Дизайн", "Брендинг"],
    title: "Scovo",
    description: "Дизайн-концепция для упаковки сковородок серии Black Diamond"
  },
  {
    previewUrl: "http://radar-online.ru/img/opticcenter/prev.jpg",
    slug: "opticcenter",
    tags: ["Дизайн", "Брендинг"],
    title: "ОптикЦентр",
    description:
      "Репозициониорвание бренда «ОптикЦентр», запуск рекламной кампании"
  },
  {
    previewUrl: "http://radar-online.ru/img/greennation/prev.jpg",
    slug: "greennation",
    tags: ["Дизайн", "Брендинг"],
    title: "Greennation",
    description: "Разработка бренда производителя зерновых культур"
  }
  // {
  //   previewUrl: "http://radar-online.ru/img/yaroslavsky/prev.jpg",
  //   slug: "yaroslavsky",
  //   title: "Ярославский",
  //   description: "Коммуникационное сопровождение розыгрыша квартиры"
  // },
  // {
  //   previewUrl: "http://radar-online.ru//img/adamas/prev.jpg",
  //   slug: "adamas",
  //   title: "Адамас",
  //   description: "Концепция стимулирующей акции для сети ювелирных салонов"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/championship/prev.jpg",
  //   slug: "championship",
  //   title: "Чемпионат России по фигурному катанию",
  //   description: "Видеоролик"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/21century_new/prev.jpg",
  //   slug: "city21vek",
  //   title: "Сити XXI век девелоперская компания",
  //   description: "Концепция календаря и открытки для компании"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/kanikuli/prev.jpg",
  //   slug: "kanikuli",
  //   title: "Дачный посёлок «Каникулы»",
  //   description: "Нейминг и фирменный стиль"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/markopolo/prev.jpg",
  //   slug: "markopolo",
  //   title: "Марко Поло",
  //   description: "Брендинг детского развивающего центра"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/nikola/prev.jpg",
  //   slug: "nikola",
  //   title: "Уральские пельмени на Николу Зимнего — 2016",
  //   description: "Фольклорно-гастрономический фестиваль"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pryanichnoe/prev.jpg",
  //   slug: "pryanichnoe",
  //   title: "Пряничное настроение",
  //   description: "SMM-кампания"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/yit/prev.jpg",
  //   slug: "yit",
  //   title: "ЖК «Финский залив»",
  //   description:
  //     "Позиционирование, фирменный стиль, коммуникационная стратегия и рекламные материалы"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/androdoz/prev.jpg",
  //   slug: "androdoz",
  //   title: "Андродоз",
  //   description: "Упаковка препарата для STADA"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/gagarin/prev.jpg",
  //   slug: "gagarin",
  //   title: "Интегрированная кампания «Парк Гагарина»",
  //   description:
  //     "Навигационная система для парка Гагарина в офлайне и онлайне. Приложение вошло в рейтинг «Лучшие новые приложения» в App Store"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/21century/prev.jpg",
  //   slug: "cityxxi",
  //   title: "Сити-XXI век",
  //   description: "Рекламная кампания"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/kalinka/prev.jpg",
  //   slug: "kalinka",
  //   title: "Калинка",
  //   description:
  //     "Разработка платформы бренда и рекламная кампания «Мамина забота не знает границ»"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/ambarel/prev.jpg",
  //   slug: "ambarel",
  //   title: "Амбарель",
  //   description: "Дизайн упаковки и каталога продукции"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/sbx/prev.jpg",
  //   slug: "sbx",
  //   title: "Этап Кубка мира по сноуборд-кроссу 2016 года",
  //   description: "Продвижение в социальных медиа"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/kub/prev.jpg",
  //   slug: "kub",
  //   title: "Мебельный центр «Куб»",
  //   description: "Производство ТВ-ролика"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-9.jpg",
  //   slug: "belkit",
  //   title: "Белый кит",
  //   description: "Разработка позиционирования для стоматологии"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/ariant-premium/prev.jpg",
  //   slug: "ariant-premium",
  //   title: "Ариант премиум",
  //   description:
  //     "Видеоролик и рекламная кампания для линейки премиальной продукции"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/tavriya/prev.jpg",
  //   slug: "tavriya",
  //   title: "Таврия",
  //   description: "Имиджевый рекламный видеоролик «Книга рецептов»"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/unichel/prev.jpg",
  //   slug: "unichel",
  //   title: "Юничел",
  //   description: "ТВ-ролик с Розой Сябитовой"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/chepfa/prev.jpg",
  //   slug: "cheb-ptica",
  //   title: "Чебаркульская птица",
  //   description: "Рекламная кампания «Яйцо с ярким желтком»"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-1.jpg",
  //   slug: "testo",
  //   title: "Тесто + Мясо",
  //   description:
  //     "Разработка торговой марки и рекламных материалов для линейки полуфабрикатов"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-2.jpg",
  //   slug: "citrus",
  //   title: "Citrus Fitness",
  //   description:
  //     "Разработка логотипа и фирменного стиля для крупнейшего в Челябинске фитнес-центра"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-3.jpg",
  //   slug: "scovo",
  //   title: "Scovo",
  //   description: "Разработка дизайна упаковки линеек сковород"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-11.jpg",
  //   slug: "kazhdij-den",
  //   title: "Каждый день с вами",
  //   description: "Редизайн, концепция и рекламные материалы торговой марки"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-5.jpg",
  //   slug: "ariant",
  //   title: "Kid’s Menu от «Арианта»",
  //   description: "Разработка и запуск детской линейки продуктов питания"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-10.jpg",
  //   slug: "chf",
  //   title: "Фестиваль «ЧестФест»",
  //   description: "Промо фестиваля в социальных медиа"
  // },
  // {
  //   previewUrl: "http://radar-online.ru/img/pro-4.jpg",
  //   slug: "idel",
  //   title: "Idel Tower",
  //   description: "Брендинг первого небоскреба в Уфе"
  // }
];

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
    const filteredWorks = works.filter(
      work =>
        this.state.currentTag === "Все"
          ? true
          : work.tags.indexOf(this.state.currentTag) >= 0
    );
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
