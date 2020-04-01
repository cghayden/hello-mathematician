import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";

const Nav = styled.nav`
  padding: 10px 0;
  color: grey;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 20px;
    justify-content: space-around;
    font-size: 5vmin;
    li {
      padding: 0 10px;
    }
  }
`;

const PlayModeUl = styled.ul`
  display: flex;
  align-items: center;

  justify-content: space-around;
`;
const ChoiceButton = styled.p`
  display: flex;
  justify-content: space-around;
  color: ${props => (props.active ? props.theme.green : "gray")};
  font-size: ${props => (props.active ? "22px" : "18px")};
  padding: 0;
  position: relative;
  /* border-bottom: ${props =>
    props.active ? `2px solid ${props.theme.green}` : "none"}; */
  &.underline {
    &:after {
      background: ${props => props.theme.green};;
      content: "";
      height: 2px;
      width: 110%;
      bottom: -3px;
      position: absolute;
      left: -5%;
    }
  }
`;
export default function Navigation({ playMode, setPlayMode, toggleTimer }) {
  return (
    <div>
      <Nav>
        <ul>
          {/* <li>
            <NavLink exact activeClassName="activeNav" to="/">
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink exact activeClassName="activeNav" to="/addition">
              Addition
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNav" to="/subtraction">
              Subtraction
            </NavLink>
          </li>
        </ul>
      </Nav>
      <PlayModeUl>
        <li>
          <ChoiceButton
            className={playMode === "practice" ? "underline" : null}
            role="button"
            active={playMode === "practice"}
            onClick={() => setPlayMode("practice")}
          >
            Practice
          </ChoiceButton>
        </li>
        <li>
          <ChoiceButton
            className={playMode === "timed" ? "underline" : null}
            role="button"
            active={playMode === "timed"}
            onClick={() => {
              setPlayMode("timed");
              toggleTimer(true);
            }}
          >
            Timed
          </ChoiceButton>
        </li>
      </PlayModeUl>
    </div>
  );
}
