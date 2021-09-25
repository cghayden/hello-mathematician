import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ChevronsDown from './ChevronsDown';
import OneHandClockSvg from './OneHandClockSvg';
import OverlayOneHandClockSvg from './OverlayOneHandClockSvg';

type Props = {
  view: View;
  maxValue: number;
  toggleOptions: React.Dispatch<React.SetStateAction<boolean>>;
  inProgress: boolean;
  options: boolean;
  reset: Function;
};

export default function ActiveOperationHeading({
  view,
  maxValue,
  toggleOptions,
  inProgress,
  options,
  reset,
}: Props) {
  const [viewString, setViewString] = useState('Addition');
  useEffect(() => {
    if (view === '+') {
      setViewString('Addition');
    }
    if (view === '-') {
      setViewString('Subtraction');
    }
    if (view === 'x') {
      setViewString('Multiplication');
    }
    if (view === '/') {
      setViewString('Division');
    }
  }, [view]);

  const handleClick = () => {
    if (!inProgress) {
      if (!options) {
        toggleOptions(true);
      }
      if (options) {
        toggleOptions(false);
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  };

  return (
    <HeadingStyles>
      <HeadingAndToggler>
        <h2 role='button' onClick={handleClick}>
          {viewString} to {maxValue}
        </h2>
        <MenuButton disabled={inProgress} onClick={handleClick}>
          <ChevronsDown />
        </MenuButton>
      </HeadingAndToggler>
      {inProgress && (
        <TimerActiveIcon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <OneHandClockSvg />
          <OverlayOneHandClockSvg />
        </TimerActiveIcon>
      )}
    </HeadingStyles>
  );
}

const HeadingStyles = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  justify-items: center;
  justify-content: center;
  color: var(--yellow);
  align-items: center;
  h2 {
    font-size: 26px;
  }
  @media screen and (max-width: 475px) {
    grid-template-columns: 1fr 190px 1fr 1fr 1fr;
    h2 {
      font-size: 20px;
    }
  }
`;
const MenuButton = styled.button`
  border: none;
  padding: 10px;
  margin-left: 8px;
  color: var(--yellow);
  /* color: var(--white); */
  background: transparent;
  border-radius: 50px;
  display: grid;
  place-items: center;
`;

const HeadingAndToggler = styled.div`
  grid-column: 1/-1;
  grid-row: 1;
  display: flex;
  align-items: center;
`;
const TimerActiveIcon = styled(motion.div)`
  grid-column: 3;
  grid-row: 1;
  display: grid;
  justify-self: left;
  position: relative;
  /* padding-left: 15px; */
  .overlay {
    position: absolute;
  }
  @media screen and (max-width: 475px) {
    justify-self: center;
    grid-column: 4;
  }
`;
