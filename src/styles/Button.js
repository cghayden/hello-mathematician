import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  color: var(--dark);
  background: var(--white);
  padding: 6px 8px;
  border-radius: 50px;
  border-style: none;
  font-size: 16px;
  margin: 0 5px;
  :focus {
    border: none;
    border-style: none;
    box-shadow: 0px 0px 2px 2px var(--dark);
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
