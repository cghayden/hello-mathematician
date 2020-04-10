import styled from "styled-components";

const SubmitPillButton = styled.button`
  width: auto;
  padding: 8px 26px;
  font-size: 24px;
  border: none;
  border-radius: 50px;
  margin-bottom: 20px;
  color: var(--dark);
  background-color: var(--light);
  grid-column: 1/-1;
  :focus {
    border: 1px solid blue;
  }
`;

export default SubmitPillButton;
