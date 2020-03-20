import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Equation = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  input {
    font-size: inherit;
    border-radius: 5px;
    border: none;
    margin: 0 1rem;
    width: 5ch;
  }
  button {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const initialInput = "";

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export default function Addition({ max = 20 }) {
  const [answer, setAnswer] = useState(initialInput);
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [isCorrect, setIsCorrect] = useState();

  const inputEl = useRef(null);
  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);
  useEffect(() => {
    setDigit1(getRandom(max));
    setDigit2(getRandom(max));
    inputEl.current.focus();
  }, [max]);

  function nextProblem() {
    setAnswer(initialInput);
    setDigit1(getRandom(max));
    setDigit2(getRandom(max));
    setIsCorrect();
  }

  function checkAnswer(e, answer, digit1, digit2) {
    e.preventDefault();
    const correctAnswer = digit1 + digit2;
    if (parseInt(answer, 10) === correctAnswer) {
      correctAudio.current.play();
    } else {
      wrongAudio.current.play();
    }
    setIsCorrect(parseInt(answer, 10) === correctAnswer);
    setTimeout(() => nextProblem(), 1500);
  }

  return (
    <div>
      <Equation>
        <p>{digit1}</p>
        <p>+</p>
        <p>{digit2}</p>
        <p>=</p>
        <form
          method="POST"
          onSubmit={e => checkAnswer(e, answer, digit1, digit2)}
        >
          <input
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
    </div>
  );
}
