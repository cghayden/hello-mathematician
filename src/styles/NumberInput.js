import styled from "styled-components";

const NumberInput = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
  input {
    /* position: relative; */
    background: transparent;
    border-radius: 0;
    caret-color: white;
    color: white;
    &:focus {
      outline: none;
      caret-color: 2px solid white;
    }
  }
`;

export default NumberInput;
