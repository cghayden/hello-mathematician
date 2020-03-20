import React from "react";
import Navigation from "./Navigation";
import Addition from "./Addition";
import Home from "./Home";
import Subtraction from "./Subtraction";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
export default function App() {
  return (
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
  );
}
