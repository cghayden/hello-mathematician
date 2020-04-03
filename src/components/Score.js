import React from "react";
import LargePillButton from "./LargePillButton";
import styled from "styled-components";

const ScoreDiv = styled.div`
  font-size: 22px;
`;

export default function Score({ score, setScore, toggleScore, toggleTimer }) {
  return (
    <ScoreDiv>
      <p>Your Score: {score}</p>
      <LargePillButton
        onClick={() => {
          setScore(0);
          toggleScore(false);
          toggleTimer(true);
        }}
      >
        Play again
      </LargePillButton>
    </ScoreDiv>
  );
}
