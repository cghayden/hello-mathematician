import styled from "styled-components";

const NumberInput = styled.form`
  input {
    width: 90%;
    background: transparent;
    border-radius: 0;
    border-bottom: ${props =>
      props.visible ? `2px solid white` : "transparent"};
    /* border-bottom: 2px solid white; */
    caret-color: white;
    &:focus {
      outline: white auto 5px;
    }
  }
`;

export default NumberInput;
