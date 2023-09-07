import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  height: 100vh;

  img {
    height: 120px;
    width: 120px;
    outline-offset: 0.2rem;
    background-color: lightgray;
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  & > div {
    margin: 3rem 0;
  }

  .mirrored{
    transform: scaleX(-1);
  }

  .infoBox {
    position: relative;
    height: 100px;
  }

  article {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #000c16;
    border-radius: 10px;
    z-index: 2;
    padding: 10px;
  }
`;
