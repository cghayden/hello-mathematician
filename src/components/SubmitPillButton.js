import styled from "styled-components";

const SubmitPillButton = styled.button`
  width: auto;
  padding: 10px 30px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  margin-top: 22px;
  color: rgba(34, 124, 195, 1);
  background-color: white;
  grid-row: 3;
  grid-column: 1/-1;
  :focus {
    border: 1px solid blue;
  }
`;

export default SubmitPillButton;
