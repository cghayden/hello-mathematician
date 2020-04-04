import styled from "styled-components";

const Equation = styled.div`
  .fullEquation {
    display: flex;
    align-items: baseline;
    grid-column: 1/-1;
    padding-left: 30px;
  }
  color: white;
  font-size: 2.75rem;
  padding: 0px 0px 20px 0px;
  display: grid;
  grid-template-columns:
    minmax(50px, max-content) 30px minmax(50px, min-content)
    34px 100px;
  place-items: center;
  justify-content: center;
  span {
    padding-right: 5px;
  }
  input {
    font-size: 2.75rem;
    font: inherit;
    border-radius: 5px;
    border: none;
    margin: 0 1rem;
    width: 90px;
    margin: 0;
    height: 2ch;
  }
  .revealCorrect {
    color: red;
    position: absolute;
    right: -44px;
    top: -35px;
  }
  .equals {
    position: relative;
    padding: 0 10px 0 5px;
  }
  .right-wrong {
    height: 20px;
    font-size: 20px;
    padding-bottom: 10px;
    /* padding-top: 20px; */
    grid-column: 1/-1;
    color: var(--green);
  }
`;
export default Equation;
