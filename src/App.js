import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./fonts/proximanova.css";
import Colors from "./Colors";
import Header from "./Header";
import Home from "./Home";
import Works from "./Works";
import About from "./About";
import Team from "./Team";
import Clients from "./Clients";
import Contact from "./Contact";

const Page = styled.div`
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
  color: ${Colors.ebony};

  & :focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${Colors.scarlet};
  }
  & ::selection {
    background: ${Colors.scarlet};
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/clients" component={Clients} />
          <Route path="/contact" component={Contact} />
        </Page>
      </Router>
    );
  }
}

export default App;
