import React from "react";
import styled from "styled-components";
import MinusCircleSvg from "./MinusCircleSvg";
import PlusCircleSvg from "./PlusCircleSvg";
import LargePillButton from "./LargePillButton";

export default function Timer({
  toggleInProgress,
  addTime,
  subtractTime,
  minutes,
  seconds,
  toggleOptions,
  setOptionsView,
}) {
  function go() {
    setOptionsView("starter");
    toggleOptions(false);
    const time = minutes * 60000 + seconds * 1000;
    setTimeout(function () {
      setOptionsView("score");
      toggleOptions(true);
      toggleInProgress(false);
    }, time);
  }

  return (
    <TimerStyle>
      <Time>
        <p>Timer:</p>
        <p>
          {minutes}:{seconds === 0 ? "00" : seconds}
        </p>
        <TimeButtons>
          <AlterTimeButton onClick={() => addTime()}>
            <PlusCircleSvg />
          </AlterTimeButton>
          <AlterTimeButton
            disabled={minutes === 0 && seconds === 15}
            onClick={() => subtractTime()}
          >
            <MinusCircleSvg />
          </AlterTimeButton>
        </TimeButtons>
      </Time>
      <StartPillButton
        onClick={() => {
          go();
        }}
      >
        START
      </StartPillButton>
    </TimerStyle>
  );
}

const TimerStyle = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
`;

const Time = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 2fr 1fr 1fr;
  place-items: center;
`;
const TimeButtons = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 10px;
`;

const AlterTimeButton = styled.button`
  color: var(--dark);
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  :focus {
    color: blue;
  }
`;

const StartPillButton = styled(LargePillButton)`
  grid-row: 1;
  grid-column: 1/-1;
  width: 200px;
  margin-bottom: 20px;
  margin-top: 20px;
  background: var(--white);
`;
