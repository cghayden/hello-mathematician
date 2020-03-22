import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #e0e3f0;
    color: #0F2417;

    ${"" /* font-family: 'IBM Plex Sans', sans-serif; */}
    font-family: 'Baloo Da 2', cursive;   
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
