import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};
// const variants = {
//   enter: { x: 200 },
//   center: { x: 0 },
//   exit: { x: -200 }
// };

export default function Timer({
  toggleInProgress,
  toggleScore,
  showTimer,
  toggleTimer
}) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [starterStep, setStarterStep] = useState(1);
  const [isStarterActive, setIsStarterActive] = useState(false);

  function runStarter() {
    setIsStarterActive(true);
  }

  function reset() {
    setIsStarterActive(false);
    setStarterStep(1);
  }

  useEffect(() => {
    let interval = null;
    if (isStarterActive && starterStep < 4) {
      interval = setInterval(() => {
        setStarterStep(starterStep => starterStep + 1);
      }, 1000);
    } else if (starterStep > 3) {
      toggleInProgress(true);

      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarterActive, starterStep]);

  function addTime() {
    if (seconds === 45) {
      setMinutes(minutes => minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds => seconds + 15);
    }
  }

  function subtractTime() {
    if (seconds === 0) {
      setSeconds(45);
      setMinutes(minutes => minutes - 1);
    } else {
      setSeconds(seconds => seconds - 15);
    }
  }

  function go() {
    runStarter();
    toggleTimer(false);
    // toggleInProgress(true);
    const time = minutes * 60000 + seconds * 1000;
    setTimeout(function() {
      toggleScore(true);
      toggleInProgress(false);
    }, time);
  }

  return (
    <div>
      <AnimatePresence>
        {showTimer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: "hidden" }}
          >
            <TimerStyle>
              <h3>Timer:</h3>
              <p>
                {minutes}:{seconds === 0 ? "00" : seconds}
              </p>
              <div>
                <button type="button" onClick={() => addTime()}>
                  +
                </button>
                <button
                  disabled={minutes === 0 && seconds === 15}
                  type="button"
                  onClick={() => subtractTime()}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => {
                  go();
                  runStarter();
                }}
              >
                start
              </button>
            </TimerStyle>
          </motion.div>
        )}
      </AnimatePresence>
      <ReadySetStyle>
        <AnimatePresence exitBeforeEnter>
          {starterStep === 1 && isStarterActive && (
            <StarterMessage
              variants={variants}
              transition={{ duration: 0.4 }}
              initial="enter"
              animate="center"
              key={1}
              exit="exit"
            >
              Ready...
            </StarterMessage>
          )}
          {starterStep === 2 && (
            <StarterMessage
              variants={variants}
              transition={{ duration: 0.4 }}
              initial="enter"
              animate="center"
              key={2}
              exit="exit"
            >
              Set...
            </StarterMessage>
          )}
          {starterStep === 3 && (
            <StarterMessage
              variants={variants}
              transition={{ duration: 0.4 }}
              initial="enter"
              animate="center"
              key={3}
              exit="exit"
            >
              Go!...
            </StarterMessage>
          )}
        </AnimatePresence>
      </ReadySetStyle>
    </div>
  );
}

const TimerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const ReadySetStyle = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
`;

const StarterMessage = styled(motion.p)`
  font-size: 22px;
  display: inline-block;
`;
