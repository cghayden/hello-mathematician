import styled from "styled-components";

// container for operands. Position relative to allow for two operands to occupy the container on the y axis as they animate in and out together as a 'slot machine'
//Width needs to be dynamic in order to accomodate an operand of variable width.  In order to keep the OperandContainer width dynamic, a 'Ghost' operand is rendered(same value as visible operand) in the OperandContainer that is statically positioned, whose color is the same as the background, as to make it invisible.  It forces the OperandContainer to have the appropriate width.
const DigitContainer = styled.div`
  position: relative;
  padding: 0 5px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
export default DigitContainer;
