import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Equation from "./Equation";
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
export default function SubtractionEquation({ maxValue = 20, setScore }) {
  const [answer, setAnswer] = useState(initialInput);
  const [digits, setDigits] = useState([]);
  const [isCorrect, setIsCorrect] = useState();

  const inputEl = useRef(null);
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  useEffect(() => {
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    if (view === "subtraction") {
      setDigits(array.sort((a, b) => b - a));
    } else {
      setDigits(array);
    }
    inputEl.current.focus();
  }, [maxValue]);

  function nextProblem() {
    setAnswer(initialInput);
    const n1 = getRandom(maxValue);
    const n2 = getRandom(maxValue);
    const array = [n1, n2];
    setDigits(array.sort((a, b) => b - a));
    setIsCorrect();
    inputEl.current.focus();
  }

  function checkAnswer(e, answer) {
    e.preventDefault();
    const correctAnswer = digits[0] - digits[1];
    if (parseInt(answer, 10) === correctAnswer) {
      correctAudio.current.play();
      setScore((score) => score + 1);
    } else {
      wrongAudio.current.play();
    }
    setIsCorrect(parseInt(answer, 10) === correctAnswer);
    setTimeout(() => nextProblem(), 300);
  }
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Equation>
        <div className="right-wrong">{isCorrect && <p>Right!</p>}</div>
        <div className="fullEquation">
          <OperandContainer>
            <GhostOperand>{digits[0]}</GhostOperand>
            <Operand digit={digits[0]} />
          </OperandContainer>
          <Operator>-</Operator>
          <OperandContainer>
            <GhostOperand>{digits[1]}</GhostOperand>
            <Operand digit={digits[1]} />
          </OperandContainer>
          <p className="equals">
            =
            {isCorrect === false && (
              <span className="revealCorrect">{digits[0] - digits[1]}</span>
            )}
          </p>
          <NumberInput
            id="numberInput"
            method="POST"
            onSubmit={(e) => checkAnswer(e, answer, digits)}
          >
            <input
              type="number"
              pattern="[0-9]*"
              ref={inputEl}
              value={answer}
              name="answer"
              onChange={(e) => setAnswer(e.target.value, 10)}
              autoFocus
            />
          </NumberInput>
        </div>
        <SubmitPillButton form="numberInput" type="submit">
          Submit
        </SubmitPillButton>
      </Equation>
      <audio
        ref={correctAudio}
        preload="true"
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584720407/sounds/wooYeah.wav"
      />
      <audio
        ref={wrongAudio}
        src="https://res.cloudinary.com/coreytesting/video/upload/v1584721830/sounds/wrongSoft.mp3"
      />
    </motion.div>
  );
}
