import React from "react";
import styled from "styled-components";
import PlusSvg from "./PlusSvg";
import XSvg from "./XSvg";
import MinusSvg from "./MinusSvg";
// import DivideSvg from "./DivideSvg";

const Nav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 20px;
    justify-content: space-around;
    font-size: 5vmin;
    li {
      /* padding: 0 10px; */
    }
    a {
      background: transparent;
      color: white;
      padding: 12px;
      border-radius: 50%;
      display: grid;
      transition: background 0.5s;
      :focus {
        box-shadow: 0px 0px 2px 2px lightblue;
      }
    }
  }
`;

const NavButton = styled.button`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "var(--blue)" : "white")};
  box-shadow: ${(props) =>
    props.active ? `0px 0px 2px 2px lightblue` : "none"};
  padding: 12px;
  border-radius: 50%;
  display: grid;
  border: none;
`;

export default function Navigation({ view, setView, inProgress }) {
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
            onClick={() => setView("x")}
          >
            <XSvg />
          </NavButton>
        </li>
        {/* <li>
            <button  active={newActive} onClick={()=>setView('addition')}>
              <DivideSvg />
            </button>
          </li> */}
      </ul>
    </Nav>
  );
}
