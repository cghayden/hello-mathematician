import React, { useState, useRef, useEffect } from "react";
import Equation from "../styles/Equation";
import NumberInput from "../styles/NumberInput";

import { motion } from "framer-motion";
import { pageVariants } from "../utils/pageTransitions";

const initialInput = "";

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
export default function Subtraction({ max = 20 }) {
  const [answer, setAnswer] = useState(initialInput);
  const [digits, setDigits] = useState([]);
  const [isCorrect, setIsCorrect] = useState();

  const inputEl = useRef(null);
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  useEffect(() => {
    const n1 = getRandom(max);
    const n2 = getRandom(max);
    const array = [n1, n2];
    setDigits(array.sort((a, b) => b - a));
    inputEl.current.focus();
  }, [max]);

  function nextProblem() {
    setAnswer(initialInput);
    const n1 = getRandom(max);
    const n2 = getRandom(max);
    const array = [n1, n2];
    setDigits(array.sort((a, b) => b - a));
    setIsCorrect();
  }

  function checkAnswer(e, answer, digit1, digit2) {
    e.preventDefault();
    const correctAnswer = digits[0] - digits[1];
    if (parseInt(answer, 10) === correctAnswer) {
      correctAudio.current.play();
    } else {
      wrongAudio.current.play();
    }
    setIsCorrect(parseInt(answer, 10) === correctAnswer);
    setTimeout(() => nextProblem(), 1500);
  }
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Equation>
        <p>
          <span>{digits[0]}</span>

          <span>-</span>
          <span>{digits[1]}</span>
          <span>=</span>
        </p>
        <form method="POST" onSubmit={e => checkAnswer(e, answer, digits)}>
          <NumberInput
            type="number"
            pattern="[0-9]*"
            ref={inputEl}
            value={answer}
            name="answer"
            onChange={e => setAnswer(e.target.value, 10)}
          />
          <button type="submit" />
        </form>
      </Equation>
      {isCorrect === true && (
        <div>
          <p>YAY!!</p>
        </div>
      )}
      {isCorrect === false && (
        <div>
          <p>Wrong</p>
        </div>
      )}
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
