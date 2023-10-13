import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 0 1rem;
  height: 93vh;
  scroll-snap-align: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
  a {
    &:hover {
      animation: clicked 2s infinite;
      background-image: linear-gradient(45deg, #683a67, #fbae3c, #683a67);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    @keyframes clicked {
      0% {
        background-size: 200% 100%;
        background-position: 100% 0%;
      }
      50% {
        background-size: 200% 100%;
        background-position: 0% 0%;
      }
      100% {
        background-size: 200% 100%;
        background-position: 100% 0%;
      }
    }
  }
`;
