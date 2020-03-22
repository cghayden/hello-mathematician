import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Nav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.7rem;
    list-style: none;
    justify-content: space-around;
    padding: 10px;
    margin: 0;

    li {
      padding: 0 10px;
    }
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
