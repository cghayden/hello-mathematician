import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --dark: #004466;
    --light: #33ffb4;
  --blue: #227cc3;
  --green: #5dc66a;
  --red: #e7574b;
  --orange: #dfc841;
  --yellow: #e9d985;
  --white: #e0f0f3;
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
    touch-action:manipulation;
}

button {
  touch-action: manipulation;
  cursor: pointer;
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

${"" /* framer styles */}
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--white);
}

.menuToggle {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
}

fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyles;
