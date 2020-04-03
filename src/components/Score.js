import React from "react";
import SmallPillButton from "./SmallPillButton";
import styled from "styled-components";

const ScoreDiv = styled.div`
  font-size: 22px;
  width: 75%;
  margin: -50px auto;
`;

const ScoreButton = styled(SmallPillButton)`
  width: auto;
`;

const ScoreButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top: 20px;
`;

export default function Score({ score, setScore, toggleScore, toggleTimer }) {
  return (
    <ScoreDiv>
      <p>Your Score: {score}</p>
      <ScoreButtonsDiv>
        <ScoreButton
          onClick={() => {
            setScore(0);
            toggleScore(false);
            toggleTimer(true);
          }}
        >
          Play again
        </ScoreButton>
        <ScoreButton
          onClick={() => {
            setScore(0);
            toggleScore(false);
            toggleTimer(false);
          }}
        >
          Practice
        </ScoreButton>
      </ScoreButtonsDiv>
    </ScoreDiv>
  );
}
