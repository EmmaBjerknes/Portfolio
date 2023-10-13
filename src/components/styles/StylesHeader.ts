import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  height: 4rem;
  color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 5;
  h1 {
    font-family: "Satisfy", cursive;
    font-size: 2.5rem;
    width: fit-content;
    cursor: pointer;
    @media (min-width: 768px) {
      font-size: 4.5rem;
    }
    &.clicked {
      animation: clicked 0.5s linear forwards;
      background-image: linear-gradient(45deg, #683a67, #fbae3c, #683a67);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }

  @keyframes clicked {
    0% {
      background-size: 200% 100%;
      background-position: 100% 0%;
    }
    100% {
      background-size: 200% 100%;
      background-position: 0% 0%;
    }
  }
`;
