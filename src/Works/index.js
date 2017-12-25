import React, { Component } from "react";
import { Route } from "react-router-dom";
import Work from "./Work";
import List from "./List";

const Aux = props => props.children;

class Works extends Component {
  render() {
    const match = this.props.match;
    return (
      <Aux>
        <Route path={`${match.url}/:workId`} component={Work} />
        <Route exact path={match.url} component={List} />
      </Aux>
    );
  }
}

export default Works;
