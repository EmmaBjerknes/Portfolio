import styled from "styled-components";

export const NavButton = styled.div`
  background-color: aliceblue;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    margin-top: 2rem;
  }
  &:nth-child(3) {
    margin-top: 4rem;
  }

  a {
    color: black;
  }
`;