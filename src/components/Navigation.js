import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PlusSvg from "./PlusSvg";
import XSvg from "./XSvg";
import MinusSvg from "./MinusSvg";
import DivideSvg from "./DivideSvg";

const Nav = styled.nav`
  .active {
    box-shadow: 0px 0px 2px 2px lightblue;
    /* color: rgba(34, 124, 195, 1); */
    /* background: hsla(213, 93%, 39%, 0.5); */
    padding: 12px;
    border-radius: 50%;
    display: grid;
  }

  /* padding: 5px 0 20px 0; */

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
        /* border: 2px dotted yellow; */
        box-shadow: 0px 0px 2px 2px lightblue;
      }
    }
  }
`;

export default function Navigation({ activeOperation, setActiveOperation }) {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/addition">
            <PlusSvg />
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/subtraction">
            <MinusSvg />
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/multiplication">
            <XSvg />
          </NavLink>
        </li>
        {/* <li>
            <NavLink exact activeClassName="newActive" to="/division">
              <DivideSvg />
            </NavLink>
          </li> */}
      </ul>
    </Nav>
  );
}
