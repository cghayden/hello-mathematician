import styled from "styled-components";

const SmallPillButton = styled.button`
  height: 30px;
  max-width: 200px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  margin-top: 5px;
  color: rgba(34, 124, 195, 1);
  background-color: white;
  padding: 0 15px;
  :focus {
    border: 1px solid blue;
  }
`;

export default SmallPillButton;