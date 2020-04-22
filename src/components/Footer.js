import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  background: var(--white);
  height: 50px;
`;
export default function Footer() {
  return (
    <Footer>
      <a href="mailto:cghayden@gmail.com">cghayden@gmail.com</a>
    </Footer>
  );
}
