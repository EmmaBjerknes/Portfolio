import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 1rem;

  .license-container,
  .icons {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 60%;
    .icons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .large-icon {
      font-size: 2rem;
    }

    .license-container {
      display: flex;
      justify-content: start;
      font-size: 0.7rem;
      gap: 5px;
      a {
        color: lightblue;
        cursor: pointer;
      }
    }
  }
`;
