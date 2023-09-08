import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  height: 100vh;

  .profileImg {
    height: 120px;
    width: 120px;
    outline-offset: 0.2rem;
    background-color: lightgray;
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  .mirrored{
    transform: rotate(180deg)
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
