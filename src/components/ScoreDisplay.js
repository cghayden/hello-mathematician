import React from "react";
import styled from "styled-components";

const ScoreStyle = styled.div``;

export default function ScoreDisplay({ score }) {
  return (
    <ScoreStyle>
      <p>Score: {score}</p>
    </ScoreStyle>
  );
}
