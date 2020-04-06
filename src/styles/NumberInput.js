import styled from "styled-components";

const NumberInput = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
  input {
    /* position: relative; */
    font-size: 2.75rem;
    font: inherit;
    border-radius: 5px;
    border: none;
    margin: 0 1rem;
    width: 90px;
    height: 1.3ch;
    background: transparent;
    caret-color: white;
    color: white;
    &:focus {
      outline: none;
      caret-color: 2px solid white;
    }
  }
`;

export default NumberInput;
