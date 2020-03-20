import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
`;

export default function Navigation() {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addition">Addition</NavLink>
          </li>
          <li>
            <NavLink to="/subtraction">Subtraction</NavLink>
          </li>
        </ul>
      </Nav>
    </div>
  );
}
