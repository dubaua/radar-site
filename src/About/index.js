import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Title } from "../Styles";
import Footer from "../Footer";
import styled from "styled-components";
import backgroundImage from "./about-bg.jpg";

const Page = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  flex-grow: 1;
  padding-top: calc(50px + 15vh);
  color: white;
  & p {
    line-height: 1.5;
  }
`;

export default () => {
  return (
    <Page>
      <Content>
        <Grid>
          <Row>
            <Col xs={12}>
              <Title>О нас</Title>
            </Col>
            <Col xs={12} lg={5}>
              <p>
                Коммуникационное агентство Radar основано в&nbsp;2007 году
                в&nbsp;Челябинске. Наши достижения&nbsp;&mdash; это наши
                проекты, которые живут, решают поставленные задачи
                и&nbsp;приносят прибыль клиентам. Наши клиенты&nbsp;&mdash;
                компании, которые производят лучший продукт и оказывают лучшие
                услуги, смотрят в&nbsp;будущее и&nbsp;думают о&nbsp;своей
                аудитории. Наша команда&nbsp;&mdash; профессионалы, которые
                каждый день сами себе повышают планку.
              </p>
            </Col>
            <Col xs={12} lg={5}>
              <p>
                Мы&nbsp;знаем, что только так можно становиться лучше, брать
                амбициозные задачи и&nbsp;отлично решать&nbsp;их, завоевывая
                сердца клиентов, и&nbsp;создавать бренды, которые покорят умы
                аудитории.
              </p>
              <p>
                В&nbsp;2014 году мы&nbsp;открыли офис в&nbsp;Москве.
                Мы&nbsp;стали ближе к&nbsp;своим клиентам и&nbsp;помогаем
                эффективно выстраивать коммуникации с&nbsp;брендами по&nbsp;всей
                России.
              </p>
            </Col>
          </Row>
        </Grid>
      </Content>
      <Footer />
    </Page>
  );
};
