import React from "react";
import { motion } from "framer-motion";
import SmallPillButton from "./SmallPillButton";
import styled from "styled-components";

const ScoreDiv = styled(motion.div)`
  font-size: 26px;
  margin: 0px auto;
  padding-top: 20px;
  h3 {
    grid-column: 1/-1;
    padding-bottom: 5px;
  }
`;

const ScoreButton = styled(SmallPillButton)`
  font-size: 22px;
  max-width: 200px;
  margin-bottom: 20px;
`;

const ScoreButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top: 20px;
  justify-items: center;
`;

export default function Score({
  score,
  setScore,
  setOptionsView,
  toggleOptions,
  wrongOnes,
  setWrongOnes,
}) {
  return (
    <ScoreDiv
      key={"score"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>Your Score: {score}</p>
      <ScoreButtonsDiv>
        <ScoreButton
          onClick={() => {
            setScore(0);
            setOptionsView("timer");
            setWrongOnes([]);
          }}
        >
          Play again
        </ScoreButton>
        <ScoreButton
          onClick={() => {
            toggleOptions(false);
            setTimeout(() => {
              setOptionsView("timer");
              setScore(0);
              setWrongOnes([]);
            }, 1000);
          }}
        >
          Practice
        </ScoreButton>
      </ScoreButtonsDiv>
      <WrongOnesUl>
        <h3>You Missed:</h3>
        {wrongOnes.map((equation, index) => (
          <li key={index}>{equation}</li>
        ))}
      </WrongOnesUl>
    </ScoreDiv>
  );
}
const WrongOnesUl = styled.ul`
  font-size: 20px;
  display: grid;
  grid-template-columns: 120px 120px;
  justify-items: center;
`;
