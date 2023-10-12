import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 2rem;

  .profileImg {
    height: 120px;
    width: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
    border-radius: 50%;
  }

  .mirrored {
    transform: rotate(180deg);
  }

  .infoBox {
    position: relative;
  }

  article {
    position: absolute;
    inset: 8px;
    background: #000c16;
    border-radius: 10px;
    z-index: 2;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
