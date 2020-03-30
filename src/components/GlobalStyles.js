import { createGlobalStyle } from "styled-components";
import { theme } from "./themeVariables";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${theme.lightBlue};
    color: ${theme.black};

    ${"" /* font-family: 'IBM Plex Sans', sans-serif; */}
    font-family: 'Baloo Da 2', cursive;   
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

h1,h2, h3, h4, h5, p {
  margin: 0;
  line-height: 1.1;
}

a {
  text-decoration: none;
  font-size: inherit;
  color: hsl(145, 55%, 35%);
  font: 'Baloo Da 2';
}
`;

export default GlobalStyles;
