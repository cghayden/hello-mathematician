import React from "react";
import styled from "styled-components";
import PlusSvg from "./PlusSvg";
import XSvg from "./XSvg";
import MinusSvg from "./MinusSvg";
import DivideSvg from "./DivideSvg";
// import HamburgerSvg from "./HamburgerSvg";

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

const NavButton = styled.button`
  background: ${(props) => (props.active ? "var(--white)" : "transparent")};
  color: ${(props) => (props.active ? "var(--dark)" : "var(--white)")};
  box-shadow: ${(props) =>
    props.active ? `0px 0px 2px 2px lightblue` : "none"};
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

export default function Navigation({
  view,
  setView,
  inProgress,
  maxValue,
  setMaxValue,
}) {
  return (
    <Nav>
      <ul>
        <li>
          <NavButton
            disabled={inProgress}
            active={view === "+"}
            onClick={() => setView("+")}
          >
            <PlusSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            disabled={inProgress}
            active={view === "-"}
            onClick={() => setView("-")}
          >
            <MinusSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            disabled={inProgress}
            active={view === "x"}
            onClick={() => {
              if (maxValue > 100) {
                setMaxValue(100);
                setView("x");
              }
            }}
          >
            <XSvg />
          </NavButton>
        </li>
        <li>
          <NavButton
            disabled={inProgress}
            active={view === "/"}
            onClick={() => {
              if (maxValue > 100) {
                setMaxValue(100);
                setView("/");
              }
            }}
          >
            <DivideSvg />
          </NavButton>
        </li>
        {/* <li>
          <MenuButton onClick={() => toggleOptions((options) => !options)}>
            <MoreVerticalSvg />
          </MenuButton>
        </li> */}
      </ul>
    </Nav>
  );
}
