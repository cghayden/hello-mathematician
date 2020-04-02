import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themeVariables";
import Home from "./Home";
import Navigation from "./Navigation";
import AdditionController from "./AdditionController";
import SubtractionController from "./SubtractionController";
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
  const [playMode, setPlayMode] = useState("practice");
  const location = useLocation();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header>
            <h1>
              <a href="'/">Hello Mathematician!</a>
            </h1>
          </Header>
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
              <Route exact path="/">
                <Home />
              </Route>
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
                <SubtractionController
                  playMode={playMode}
                  maxValue={maxValue}
                  setScore={setScore}
                  inProgress={inProgress}
                  showTimer={showTimer}
                />
              </Route>
            </Switch>
          </AnimatePresence>

          <PlayModeUl>
            <li>
              <ChoiceButton
                className={playMode === "practice" ? "underline" : null}
                role="button"
                active={playMode === "practice"}
                onClick={() => setPlayMode("practice")}
              >
                Practice
              </ChoiceButton>
            </li>
            <li>
              <ChoiceButton
                className={playMode === "timed" ? "underline" : null}
                role="button"
                active={playMode === "timed"}
                onClick={() => {
                  setPlayMode("timed");
                  toggleTimer(true);
                }}
              >
                Timed
              </ChoiceButton>
            </li>
          </PlayModeUl>
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

const PlayModeUl = styled.ul`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ChoiceButton = styled.button`
  padding: 5px 10px;
  background: none;
  border: none;
  display: flex;
  justify-content: space-around;
  color: ${props => (props.active ? "white" : "darkgray")};
  font-size: ${props => (props.active ? "22px" : "18px")};
  padding: 0;
  position: relative;
  border-radius: 5px;
  :focus {
    box-shadow: 0px 0px 2px 2px lightblue;
  }
  &.underline {
    &:after {
      background: white;
      content: "";
      height: 2px;
      width: 110%;
      bottom: -3px;
      position: absolute;
      left: -5%;
    }
  }
`;
