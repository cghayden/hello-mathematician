import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themeVariables";
import Home from "./Home";
import Navigation from "./Navigation";
import AdditionEquation from "./AdditionEquation";
import SubtractionEquation from "./SubtractionEquation";
import GlobalStyles from "./GlobalStyles";
import MaxValue from "./MaxValue";
import Timer from "./Timer";
import Score from "./Score";

const Container = styled.div`
  text-align: center;
  margin: 0;
  height: 100vh;
  h1 {
    padding: 10px 0;
  }
`;
const Header = styled.header`
  padding-top: 20px;
`;

export default function App() {
  const [maxValue, setMaxValue] = useState(20);
  const [score, setScore] = useState(0);
  const [showTimer, toggleTimer] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const location = useLocation();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header>
            <h1>
              <Link to="/">Hello Mathematician!</Link>
            </h1>
          </Header>
          <Navigation toggleTimer={toggleTimer} />
          <MaxValue
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            inProgress={inProgress}
          />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/addition">
                <AdditionEquation
                  visible={!showTimer}
                  maxValue={maxValue}
                  setScore={setScore}
                />
              </Route>
              <Route exact path="/subtraction">
                <SubtractionEquation
                  visible={!showTimer}
                  maxValue={maxValue}
                  setScore={setScore}
                />
              </Route>
            </Switch>
          </AnimatePresence>

          <TimerContainer>
            <Timer
              score={score}
              showTimer={showTimer}
              toggleTimer={toggleTimer}
              toggleInProgress={toggleInProgress}
              toggleScore={toggleScore}
              inProgress={inProgress}
            />
          </TimerContainer>
          {showScore && (
            <Score
              score={score}
              setScore={setScore}
              toggleScore={toggleScore}
              toggleTimer={toggleTimer}
            />
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
