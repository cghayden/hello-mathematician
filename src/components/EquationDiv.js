import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
// import Operand from "./Operand";
import Equation from "./Equation";
import SubmitPillButton from "./SubmitPillButton";

function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

export default function EquationDiv({ view, maxValue = 10, setScore }) {
  const [digits, setDigits] = useState([]);
  const [solution, setSolution] = useState();
  const inputEl = useRef(null);
  useEffect(setup, [view, maxValue]);

  useEffect(() => {
    inputEl.current.focus();
    // labelRef.current.click();
  });

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

  function handleInputChange(e) {
    setAnswer(e.target.value, 10);
  }

  function setup() {
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    if (view === "-") {
      setDigits(array.sort((a, b) => b - a));
    } else {
      setDigits(array);
    }
    inputEl.current.focus();
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

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  function handleCalcButton(e) {
    const number = e.target.innerHTML;
    console.log("number pressed:", e.target.innerHTML);
    setAnswer((answer) => answer + number);
  }
  return (
    <EquationMainWrapper>
      <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
      <FullEquation
        className="fullEquation"
        id="inputForm"
        action="POST"
        onSubmit={(e) => checkAnswer(e)}
      >
        <label htmlFor="answer">
          <OperandContainer className="operandContainer">
            {/* <GhostOperand>{digits[0]}</GhostOperand> */}
            <p>{digits[0]}</p>
          </OperandContainer>
          <p>{view}</p>
          <OperandContainer>
            {/* <GhostOperand>{digits[1]}</GhostOperand> */}
            <p>{digits[1]}</p>
          </OperandContainer>
          <p className="equals">=</p>
          {isCorrect === false && (
            <span className="revealCorrect">{solution}</span>
          )}
          <input
            autoFocus
            id="answer"
            type="number"
            pattern="[0-9]*"
            ref={inputEl}
            value={answer}
            name="answer"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </FullEquation>

      <SubmitPillButton type="submit" form="inputForm">
        Submit
      </SubmitPillButton>
      <Calculator>
        {buttons.map((number) => (
          <CalcButton
            type="button"
            key={number}
            onClick={(e) => handleCalcButton(e)}
          >
            {number}
          </CalcButton>
        ))}
      </Calculator>
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

const Calculator = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: 60px 60px 60px;
  grid-template-rows: auto;
  grid-gap: 10px;
  padding: 20px 10px;
  margin-top: 15px;
  justify-content: center;
  border-radius: 20px;
  /* @media screen and (min-width: 600px) {
    display: none;
  } */
`;

const CalcButton = styled.button`
  width: 52px;
  height: 52px;
  padding: 0;
  border-radius: 50%;
  border: none;
  font-size: 32px;
  background: white;
  color: var(--green);
  display: grid;
  place-items: center;
`;

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

const EquationMainWrapper = styled.div`
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

const OperandContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 100%;
  display: flex;
  justify-content: center;
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
