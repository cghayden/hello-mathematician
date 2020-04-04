import styled from "styled-components";

const SubmitPillButton = styled.button`
  /* height: 40px; */
  width: auto;
  padding: 10px 30px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  margin-top: 5px;
  color: rgba(34, 124, 195, 1);
  background-color: white;
  grid-row: 2;
  grid-column: 1/-1;
  :focus {
    border: 1px solid blue;
  }
`;

export default SubmitPillButton;
