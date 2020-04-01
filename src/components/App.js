import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themeVariables";

import Navigation from "./Navigation";
import AdditionController from "./AdditionController";
import Home from "./Home";
import Subtraction from "./Subtraction";
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
export default function App() {
  const [maxValue, setMaxValue] = useState(20);
  const [score, setScore] = useState(0);
  const [showTimer, toggleTimer] = useState(false);
  const [showScore, toggleScore] = useState(false);
  const [inProgress, toggleInProgress] = useState(false);
  const [playMode, setPlayMode] = useState("practice");
  const location = useLocation();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <h1>Hello Mathematician!</h1>
          <Navigation
            playMode={playMode}
            setPlayMode={setPlayMode}
            toggleTimer={toggleTimer}
          />

          <MaxValue
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            inProgress={inProgress}
          />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              {/* <Route exact path="/">
                <Home />
              </Route> */}
              <Route exact path="/addition">
                <AdditionController
                  playMode={playMode}
                  maxValue={maxValue}
                  setScore={setScore}
                  inProgress={inProgress}
                  showTimer={showTimer}
                />
              </Route>
              <Route exact path="/subtraction">
                <Subtraction
                  playMode={playMode}
                  max={maxValue}
                  setScore={setScore}
                />
              </Route>
            </Switch>
          </AnimatePresence>
          {playMode === "timed" && (
            <Timer
              score={score}
              showTimer={showTimer}
              toggleTimer={toggleTimer}
              toggleInProgress={toggleInProgress}
              toggleScore={toggleScore}
            />
          )}
          {showScore && playMode === "timed" && (
            <Score
              score={score}
              toggleScore={toggleScore}
              toggleTimer={toggleTimer}
            />
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

const ExampleTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
