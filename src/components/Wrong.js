import React from "react";
import styled from "styled-components";

const WrongDiv = styled.div`
  font-size: 24px;
`;

export default function Wrong() {
  return (
    <WrongDiv>
      <p>Wrong!</p>
    </WrongDiv>
  );
}
