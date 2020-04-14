import React from "react";
import styled from "styled-components";
import ChevronUpSvg from "./ChevronUpSvg";
import ChevronDownSvg from "./ChevronDownSvg";

const MaxValueContainer = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
`;

const ChangeButtons = styled.div`
  display: flex;
  flex-direction: column;
`;
const AlterMaxButton = styled.button`
  border-radius: 50%;
  /* color: var(--orange); */
  padding: 0;
  margin: 0;
  background: none;
  border: none;

  &:focus,
  &:active {
    outline: none;
    border: 1px solid white;
    box-shadow: 0 0 1px 1px white;
  }
`;

const MaxDigit = styled.p`
  font-size: 20px;
  margin: 0 8px;
`;

export default function MaxValue({ maxValue, setMaxValue, inProgress }) {
  return (
    <MaxValueContainer className="maxValueContainer">
      <p>Max Value:</p>
      <MaxDigit>{maxValue}</MaxDigit>
      <ChangeButtons>
        <AlterMaxButton
          disabled={inProgress}
          onClick={() => setMaxValue((maxValue) => maxValue + 1)}
        >
          <ChevronUpSvg />
        </AlterMaxButton>
        <AlterMaxButton
          disabled={inProgress}
          onClick={() => setMaxValue((maxValue) => maxValue - 1)}
        >
          <ChevronDownSvg />
        </AlterMaxButton>
      </ChangeButtons>
    </MaxValueContainer>
  );
}
