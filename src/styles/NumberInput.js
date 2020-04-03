import styled from "styled-components";

const NumberInput = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
  input {
    width: 90%;
    background: transparent;
    border-radius: 0;
    border-bottom: ${props =>
      props.visible ? `2px solid white` : "transparent"};
    caret-color: white;
    color: white;
    &:focus {
      outline: none;
      border-bottom: ${props =>
        props.visible ? `2px solid white` : "transparent"};
      caret-color: ${props =>
        props.visible ? `2px solid white` : "transparent"};
    }
  }
`;

export default NumberInput;
