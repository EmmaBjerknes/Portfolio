import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

  .projectCard {
    background: rgba(0, 18, 32, 0.75);
    margin: 30px 10px;
    min-width: 320px;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
`;
