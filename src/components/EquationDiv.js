import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import Operand from "./Operand";
import Equation from "./Equation";
import SubmitPillButton from "./SubmitPillButton";

function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

export default function EquationDiv({ view, maxValue = 10, setScore }) {
  const [digits, setDigits] = useState([]);
  const [solution, setSolution] = useState();
  useEffect(setup, [view, maxValue]);

  useEffect(() => {
    if (view === "+") {
      setSolution(digits[0] + digits[1]);
    }
    if (view === "-") {
      setSolution(digits[0] - digits[1]);
    }
    if (view === "x") {
      setSolution(digits[0] * digits[1]);
    }
  }, [view, digits]);

  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  function setup() {
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    if (view === "-") {
      setDigits(array.sort((a, b) => b - a));
    } else {
      setDigits(array);
    }
    // inputEl.current.focus();
  }

  function nextProblem() {
    setAnswer("");
    setIsCorrect();
    setup();
    // inputEl.current.focus();
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (parseInt(answer, 10) === solution) {
      setIsCorrect(true);
      correctAudio.current.play();
      setScore((score) => score + 1);
    } else {
      setIsCorrect(false);
      wrongAudio.current.play();
    }
    setTimeout(() => nextProblem(), 400);
  }

  return (
    <EquationMainWrapper
      key={view}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
      <Equation
        digits={digits}
        isCorrect={isCorrect}
        solution={solution}
        answer={answer}
        setAnswer={setAnswer}
        checkAnswer={checkAnswer}
        view={view}
      />
      <SubmitPillButton type="submit" form="inputForm">
        Submit
      </SubmitPillButton>
      <audio
        ref={correctAudio}
        preload="true"
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584720407/sounds/wooYeah.wav"
      />
      <audio
        ref={wrongAudio}
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584721830/sounds/wrongSoft.mp3"
      />
    </EquationMainWrapper>
  );
}

const FullEquation = styled.form`
  font-family: "Fira Sans";
  position: relative;
  background: transparent;
  display: flex;
  /* grid-template-columns: 2ch 1ch 2ch 1ch 2ch; */
  align-items: center;
  label {
    display: flex;
    padding-right: 10px;
  }
  input {
    padding: 0;
    height: 100%;
    font: inherit;
    background: transparent;
    border: none;
    margin: 0 0;
    width: 90px;
    color: white;
    caret-color: white;
    &:focus {
      outline: none;
    }
  }
  .revealCorrect {
    color: red;
    position: absolute;
    right: 50px;
    top: -50px;
  }
`;

const EquationMainWrapper = styled(motion.div)`
  /* align-self: start; */
  color: white;
  font-size: 4rem;
  /* padding: 0px 0px 20px 0px; */
  display: grid;
  place-items: center;

  .right-wrong {
    height: 20px;
    font-size: 20px;
    padding-bottom: 10px;
    /* padding-top: 20px; */
    grid-column: 1/-1;
    color: var(--green);
  }
`;

// useEffect(() => {
//     inputEl.current.focus();
//   });

//   useEffect(() => {
//     const n1 = getRandom(maxValue);
//     const n2 = getRandom(maxValue);
//     const array = [n1, n2];
//     if(view === '-'){
//       setDigits(array.sort((a, b) => b - a));
//     }
//     else{
//       setDigits(array)
//     }
//   }, [maxValue, view]);
