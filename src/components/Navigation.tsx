import styled from 'styled-components';
import PlusSvg from './PlusSvg';
import XSvg from './XSvg';
import MinusSvg from './MinusSvg';
import DivideSvg from './DivideSvg';
import React from 'react';
import { useGlobalState } from './GlobalState';

const Nav = styled.nav`
  ul {
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 20px;
    justify-content: space-around;

    svg {
      width: 24px;
      height: 24px;
    }
    @media screen and (max-width: 768px) {
      padding-bottom: 0px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

interface NavButtonProps {
  active: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  background: ${(props) => (props.active ? 'var(--white)' : 'transparent')};
  color: ${(props) => (props.active ? 'var(--dark)' : 'var(--white)')};
  box-shadow: ${(props) =>
    props.active ? `0px 0px 2px 2px lightblue` : 'none'};
  padding: 12px;
  border-radius: 50%;
  display: grid;
  border: none;
  :focus {
    box-shadow: 0px 0px 2px 2px lightblue;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

type Props = {
  timeoutId: number;
};

function Navigation({ timeoutId }: Props) {
  const { maxValue, setMaxValue, view, setView, toggleInProgress } =
    useGlobalState();

  const reset = () => {};

  function cancelTimer(timeoutId: number) {
    console.log('cancel timer');
    clearTimeout(timeoutId);
    toggleInProgress(false);
    reset();
  }

  return (
    <Nav>
      <ul>
        <li>
          <NavButton
            active={view === '+'}
            onClick={() => {
              cancelTimer(timeoutId);
              setView('+');
            }}
          >
            <PlusSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            active={view === '-'}
            onClick={() => {
              cancelTimer(timeoutId);
              setView('-');
            }}
          >
            <MinusSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            active={view === 'x'}
            onClick={() => {
              if (maxValue > 100) {
                setMaxValue(100);
              }
              cancelTimer(timeoutId);
              setView('x');
            }}
          >
            <XSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            active={view === '/'}
            onClick={() => {
              if (maxValue > 100) {
                setMaxValue(100);
              }
              cancelTimer(timeoutId);
              setView('/');
            }}
          >
            <DivideSvg />
          </NavButton>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
