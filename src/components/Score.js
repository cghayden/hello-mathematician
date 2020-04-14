import React from "react";
import { motion } from "framer-motion";
import SmallPillButton from "./SmallPillButton";
import styled from "styled-components";

const ScoreDiv = styled(motion.div)`
  font-size: 22px;
  margin: 0px auto;
`;

const ScoreButton = styled(SmallPillButton)`
  max-width: 200px;
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
          }}
        >
          Play again
        </ScoreButton>
        <ScoreButton
          onClick={() => {
            setScore(0);
            toggleOptions(false);
            setTimeout(() => setOptionsView("timer"), 1000);
          }}
        >
          Practice
        </ScoreButton>
      </ScoreButtonsDiv>
    </ScoreDiv>
  );
}
