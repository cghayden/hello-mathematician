import styled from "styled-components";

const Equation = styled.div`
  color: ${props => (props.visible ? `white` : "transparent")};
  font-size: 2.75rem;
  padding: 10px 0;
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
  button {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
export default Equation;
