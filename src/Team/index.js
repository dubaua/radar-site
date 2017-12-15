import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title } from "../Styles";
import Colors from "../Colors";
import Footer from "../Footer";
import styled from "styled-components";

const team = [
  {
    id: 1,
    imageUrl: require("./img/01.jpg"),
    name: "Татьяна Шашлова",
    position: "CEO",
    order: 1
  },
  {
    id: 2,
    imageUrl: require("./img/02.jpg"),
    name: "Ксения Яковенко",
    position: "Account group head",
    order: 2
  },
  {
    id: 3,
    imageUrl: require("./img/shorohova.jpg"),
    name: "Ксения Шорохова",
    position: "Senior Account manager",
    order: 3
  },
  {
    id: 4,
    imageUrl: require("./img/43.jpg"),
    name: "Мария Зайцева",
    position: "Account manager",
    order: 4
  },
  {
    id: 5,
    imageUrl: require("./img/khramova.jpg"),
    name: "Юлия Храмова",
    position: "Account manager",
    order: 5
  },
  {
    id: 6,
    imageUrl: require("./img/gorushkina.jpg"),
    name: "Анастасия Горюшкина",
    position: "Account manager",
    order: 6
  },
  {
    id: 7,
    imageUrl: require("./img/lopatina.jpg"),
    name: "Мария Лопатина",
    position: "Account manager",
    order: 7
  },
  {
    id: 8,
    imageUrl: require("./img/vershinina.jpg"),
    name: "Елена Вершинина",
    position: "Account manager",
    order: 8
  },
  {
    id: 9,
    imageUrl: require("./img/ogorodov.jpg"),
    name: "Владимир Огородов",
    position: "New Business Manager",
    order: 9
  },
  {
    id: 10,
    imageUrl: require("./img/belousova.jpg"),
    name: "Анна Белоусова",
    position: "New Business Manager",
    order: 10
  },
  {
    id: 11,
    imageUrl: require("./img/sidorova.jpg"),
    name: "Екатерина Сидорова",
    position: "New Business Manager",
    order: 11
  },
  {
    id: 12,
    imageUrl: require("./img/petrachkova.jpg"),
    name: "Инна Петрачкова",
    position: "Account Director, Radar Moscow",
    order: 12
  },
  {
    id: 13,
    imageUrl: require("./img/31.jpg"),
    name: "Арина Махарани",
    position: "New Business Manager, Radar Moscow",
    order: 13
  },
  {
    id: 14,
    imageUrl: require("./img/50.jpg"),
    name: "Артем Шарипов",
    position: "New business director, Radar Moscow",
    order: 14
  },
  {
    id: 15,
    imageUrl: require("./img/bannov.jpg"),
    name: "Кирилл Баннов",
    position: "Strategist",
    order: 15
  },
  {
    id: 16,
    imageUrl: require("./img/matrynov.jpg"),
    name: "Иван Мартынов",
    position: "Senior Copywriter",
    order: 16
  },
  {
    id: 17,
    imageUrl: require("./img/shumakov.jpg"),
    name: "Даниил Шумаков",
    position: "Senior designer",
    order: 17
  },
  {
    id: 18,
    imageUrl: require("./img/rakitin.jpg"),
    name: "Александр Ракитин",
    position: "Senior designer",
    order: 18
  },
  {
    id: 19,
    imageUrl: require("./img/braude.jpg"),
    name: "Надежда Брауде",
    position: "Designer",
    order: 19
  },
  {
    id: 20,
    imageUrl: require("./img/u-ponomareva.jpg"),
    name: "Юля Пономарёва",
    position: "Digital Account manager",
    order: 20
  },
  {
    id: 21,
    imageUrl: require("./img/khripushin.jpg"),
    name: "Дмитрий Хрипушин",
    position: "Digital Group Head",
    order: 21
  },
  {
    id: 22,
    imageUrl: require("./img/lysov.jpg"),
    name: "Владимир Лысов",
    position: "Web Developer",
    order: 22
  },
  {
    id: 23,
    imageUrl: require("./img/shaihanov.jpg"),
    name: "Александр Шайханов",
    position: "Web Developer",
    order: 23
  },
  {
    id: 24,
    imageUrl: require("./img/anikeev.jpg"),
    name: "Николай Аникеев",
    position: "Web Designer",
    order: 24
  },
  {
    id: 25,
    imageUrl: require("./img/petrozhak.jpg"),
    name: "Ксения Петрожак",
    position: "Internet Marketing Manager",
    order: 25
  },
  {
    id: 26,
    imageUrl: require("./img/tolstosutskix.jpg"),
    name: "Николай Толстолуцких",
    position: "Internet Marketing Manager",
    order: 26
  },
  {
    id: 27,
    imageUrl: require("./img/pospelova.jpg"),
    name: "Юлия Поспелова",
    position: "Content Manager",
    order: 27
  },
  {
    id: 28,
    imageUrl: require("./img/mishin.jpg"),
    name: "Антон Мишин",
    position: "SM Group Head",
    order: 28
  },
  {
    id: 29,
    imageUrl: require("./img/prosyanik.jpg"),
    name: "Егор Просяник",
    position: "SM Manager",
    order: 29
  },
  {
    id: 30,
    imageUrl: require("./img/rechkalov.jpg"),
    name: "Виктор Речкалов",
    position: "Video Designer",
    order: 30
  },
  {
    id: 31,
    imageUrl: require("./img/bondaruk.jpg"),
    name: "Маргарита Бондарук",
    position: "CFO",
    order: 31
  },
  {
    id: 32,
    imageUrl: require("./img/domashevskaya.jpg"),
    name: "Ольга Домашевская",
    position: "Accountant",
    order: 32
  }
];

const Page = styled.div`
  padding-top: 50px;
`;

const Team = styled.section`
  padding: 48px 0;
  & a {
    color: inherit;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Member = styled.div`
  position: relative;
  line-height: 0;
  margin-bottom: 16px;
`;

const Photo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  background: #000;
  background: ${Colors.woodsmoke};
  bottom: 0;
  color: white;
  left: 0;
  line-height: 1;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Name = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 10px;
  width: 0;
`;

const Position = styled.div`
  font-size: 14px;
`;

export default () => {
  return (
    <Page>
      <Team>
        <Grid>
          <Header>
            <Row middle="xs">
              <Col xs={7}>
                <Title>Команда</Title>
              </Col>
              <Col xs={5}>
                <p>
                  Наше агентство всегда открыто для перспективных специалистов.
                  Если вы&nbsp;хотите работать в&nbsp;команде RADAR, присылайте
                  свое резюме на&nbsp;адрес{" "}
                  <a href="mailto:job@radar-online.ru">job@radar-online.ru</a>
                </p>
              </Col>
            </Row>
          </Header>
          <Row>
            {team.map((member, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index.toString()}>
                <Member>
                  <Photo src={member.imageUrl} alt={member.name} />
                  <Overlay>
                    <Name>{member.name}</Name>
                    <Position>{member.position}</Position>
                  </Overlay>
                </Member>
              </Col>
            ))}
          </Row>
        </Grid>
      </Team>
      <Footer />
    </Page>
  );
};
