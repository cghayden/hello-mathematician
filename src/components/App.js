import React from "react";
import Navigation from "./Navigation";
import Addition from "./Addition";
import Home from "./Home";
import Subtraction from "./Subtraction";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 10px;
  height: 100vh;
`;
export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <h1>Hello Mathematician!</h1>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addition">
            <Addition />
          </Route>
          <Route path="/subtraction">
            <Subtraction />
          </Route>
        </Switch>
      </Container>
    </React.Fragment>
  );
}
