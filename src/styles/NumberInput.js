import styled from "styled-components";

const NumberInput = styled.form`
  display: flex;
  flex-direction: column;
  /* set height to height of operands */
  height: 50px;
  input {
    height: 100%;
    align-items: baseline;
    font: inherit;
    background: transparent;
    /* font-size: 2.75rem; */
    /* font: inherit; */
    border-radius: 5px;
    border: none;
    margin: 0 0;
    width: 90px;
    /* background: transparent; */
    caret-color: white;
    color: white;
    &:focus {
      outline: none;
      caret-color: 2px solid white;
    }
  }
`;

export default NumberInput;
