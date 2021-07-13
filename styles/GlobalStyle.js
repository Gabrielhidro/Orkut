import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #d9e6f6;
  box-sizing: border-box;
  font-family: sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
`