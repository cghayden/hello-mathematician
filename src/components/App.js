import React from "react";
import Navigation from "./Navigation";
import Addition from "./Addition";
import Home from "./Home";
import Subtraction from "./Subtraction";
import { Switch, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themeVariables";
import { AnimatePresence } from "framer-motion";

const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 10px;
  height: 100vh;
`;
export default function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <h1>Hello Mathematician!</h1>
          <Navigation />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
