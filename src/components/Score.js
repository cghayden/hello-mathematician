import React from "react";
import { motion } from "framer-motion";
import SmallPillButton from "./SmallPillButton";
import styled from "styled-components";
import MissedEquations from "./MissedEquations";

const ScoreDiv = styled(motion.div)`
  font-size: 26px;
  margin: 0px auto;
  padding-top: 20px;
  h3 {
    grid-column: 1/-1;
    padding-bottom: 5px;
  }
  p {
    padding: 0 10px;
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
  reset,
  score,
  count,
  toggleOptions,
  wrongOnes,
  view,
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
            reset();
          }}
        >
          Play again
        </ScoreButton>
        <ScoreButton
          onClick={() => {
            toggleOptions(false);
            setTimeout(() => {
              reset();
            }, 1000);
          }}
        >
          Practice
        </ScoreButton>
      </ScoreButtonsDiv>

      {count > 0 && (
        <div>
          <p>
            You answered {score} out of {count} correctly
          </p>
        </div>
      )}

      {wrongOnes.length > 0 && (
        <MissedEquations wrongOnes={wrongOnes} view={view} />
      )}
    </ScoreDiv>
  );
}
