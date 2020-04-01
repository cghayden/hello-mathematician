import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  color: white;
  background: ${props => props.theme.green};
  padding: 3px 5px;
  border-radius: 5px;
  border-style: none;
  :focus {
    border: none;
    border-style: none;
    box-shadow: 0px 0px 2px 2px ${props => props.theme.black};
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
