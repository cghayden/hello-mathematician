import styled from "styled-components";

const LargePillButton = styled.button`
  height: 60px;
  width: 150px;
  font-size: 22px;
  border: none;
  border-radius: 50px;
  margin-top: 5px;
  color: rgba(34, 124, 195, 1);
  background-color: white;
  :focus {
    border: 1px solid blue;
  }
`;

export default LargePillButton;
