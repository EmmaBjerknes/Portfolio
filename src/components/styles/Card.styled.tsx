import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;

  .repoCard {
    background-color: #272525;
    color: darkgray;
    margin: 10px;
    width: 20vh;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
  }
`;
