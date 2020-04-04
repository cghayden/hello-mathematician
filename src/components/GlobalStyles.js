import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
  --blue: #227cc3;
  --green: #5dc66a;
  --orange: #dfc841;
  --white: #e0f0f3;
  --red: #e7574b;
}

  body {
    ${"" /* background: rgb(34,124,195); */}
     background: linear-gradient(336deg, rgba(34,124,195,1) 60%, rgba(35,58,196,1) 100%);
    color: white;
    margin:0;
    font-family: 'Baloo Da 2', cursive;   
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
  line-height: 1.1;
}

a, button {
  text-decoration: none;
  font-family: 'Baloo Da 2';
  color: inherit;
}

`;
export default GlobalStyles;
