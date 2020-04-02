import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PlusSvg from "./PlusSvg";
import MinusSvg from "./MinusSvg";

const Nav = styled.nav`
  .newActive {
    background: white;
    color: rgba(34, 124, 195, 1);
    padding: 12px;
    border-radius: 50%;
    display: grid;
  }
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

export default function Navigation({ playMode, setPlayMode, toggleTimer }) {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <NavLink exact activeClassName="newActive" to="/addition">
              <PlusSvg />
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="newActive" to="/subtraction">
              <MinusSvg />
            </NavLink>
          </li>
        </ul>
      </Nav>
    </div>
  );
}
