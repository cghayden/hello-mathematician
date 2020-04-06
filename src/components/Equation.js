import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GhostOperand from "../styles/GhostOperand";
import NumberInput from "../styles/NumberInput";
import OperandContainer from "../styles/OperandContainer";
import Operand from "./Operand";
import Operator from "../styles/Operator";
import SubmitPillButton from "./SubmitPillButton";

const initialInput = "";

function getRandom(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

export default function Equation({ view, maxValue = 10, setScore }) {
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

  const [answer, setAnswer] = useState(initialInput);
  const [isCorrect, setIsCorrect] = useState();
  const inputEl = useRef(null);
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
    inputEl.current.focus();
  }

  function nextProblem() {
    setAnswer(initialInput);
    setIsCorrect();
    setup();
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
    setTimeout(() => nextProblem(), 300);
  }

  function handleInputChange(e) {
    setAnswer(e.target.value, 10);
  }
  return (
    <EquationStyles
      key={view}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
      <div className="fullEquation">
        <OperandContainer>
          <GhostOperand>{digits[0]}</GhostOperand>
          <Operand digit={digits[0]} />
        </OperandContainer>
        <Operator>{view}</Operator>
        <OperandContainer>
          <GhostOperand>{digits[1]}</GhostOperand>
          <Operand digit={digits[1]} />
        </OperandContainer>
        <p className="equals">
          =
          {isCorrect === false && (
            <span className="revealCorrect">{solution}</span>
          )}
        </p>
        <NumberInput
          id="numberInput"
          method="POST"
          onSubmit={(e) => checkAnswer(e)}
        >
          <input
            type="number"
            pattern="[0-9]*"
            ref={inputEl}
            value={answer}
            name="answer"
            onChange={(e) => handleInputChange(e)}
          />
        </NumberInput>
      </div>
      <SubmitPillButton form="numberInput" type="submit">
        <p>Submit</p>
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
    </EquationStyles>
  );
}

const EquationStyles = styled(motion.div)`
  .fullEquation {
    display: flex;
    align-items: baseline;
    grid-column: 1/-1;
    padding-left: 30px;
  }
  color: white;
  font-size: 2.75rem;
  padding: 0px 0px 20px 0px;
  display: grid;
  grid-template-columns:
    minmax(50px, max-content) 30px minmax(50px, min-content)
    34px 100px;
  place-items: center;
  justify-content: center;
  span {
    padding-right: 5px;
  }
  .revealCorrect {
    color: red;
    position: absolute;
    right: -44px;
    top: -35px;
  }
  .equals {
    position: relative;
    padding: 0 10px 0 5px;
  }
  .right-wrong {
    height: 20px;
    font-size: 20px;
    padding-bottom: 10px;
    /* padding-top: 20px; */
    grid-column: 1/-1;
    color: var(--green);
  }
`;
export { EquationStyles };
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
