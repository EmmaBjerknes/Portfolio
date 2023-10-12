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
    @media (min-width: 768px) {
      font-size: 4.5rem;
    }
  }
`;
