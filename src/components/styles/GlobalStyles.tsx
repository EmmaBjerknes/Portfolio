import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(224, 222, 222);
}

body {
  display: flex;
  flex-direction: column;
  background-image: url("/images/blob-scene-haikei.svg");
  background-size: cover;
  background-attachment: fixed;
  font-family: "Roboto", sans-serif;
}

a{
  text-decoration: none;
}

.scroll-container {
  overflow-y: scroll;
  scroll-snap-type: y mandatory; 
  max-height: 100vh;
}

@media (min-width: 769px) {
  body {
    background-image: url("/images/blob-scene-haikei-big.svg");
  }
}
`;
export default GlobalStyles;
