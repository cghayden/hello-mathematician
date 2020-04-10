import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --dark: #004466;
    --light: #33ffb4;
  --blue: #227cc3;
  --green: #5dc66a;
  --orange: #dfc841;
  --white: #e0f0f3;
  --red: #e7574b;
}

  body {
    font-family: 'Baloo Da 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
     background: var(--dark);
     color: var(--light);
     ${
       "" /* background: linear-gradient(336deg, rgba(34,124,195,1) 60%, rgba(35,58,196,1) 100%); */
     }
    margin:0;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

ul{
  list-style: none;
margin: 0;
padding: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

h1,h2, h3, h4, h5, p {
  margin: 0;
}

a, button {
  text-decoration: none;
  font-family: 'Baloo Da 2';
  color: inherit;
}

`;
export default GlobalStyles;
