import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MinusCircleSvg from './MinusCircleSvg';
import PlusCircleSvg from './PlusCircleSvg';
import LargePillButton from './LargePillButton';
import { useGlobalState } from './GlobalState';

const variants = {
  open: { opacity: 1 },
  transition: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
  closed: { opacity: 0 },
};

export default function Timer() {
  const { addTime, subtractTime, minutes, seconds, go } = useGlobalState();
  return (
    <TimerStyle variants={variants}>
      <Time>
        <p>Timer:</p>
        <p style={{ width: '50px' }}>
          {minutes}:{seconds === 0 ? '00' : seconds}
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

const TimerStyle = styled(motion.div)`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
`;

const Time = styled.div`
  width: 200px;
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
