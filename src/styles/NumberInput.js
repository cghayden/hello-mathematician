import styled from "styled-components";

const NumberInput = styled.form`
  input {
    width: 90%;
    background: transparent;
    border-radius: 0;
    border-bottom: 2px solid ${props => props.theme.black};
    caret-color: ${props => props.theme.black};
  }
`;

export default NumberInput;
