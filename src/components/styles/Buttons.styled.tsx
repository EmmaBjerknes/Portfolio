import styled from "styled-components";

export const RepoLinks = styled.div`
  display: flex;
  gap: 10px;
  a {
    padding: 0.5rem;
    box-shadow: 0 2px 6px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 10px;
    border: 1px solid rgba(31, 38, 135, 0.4);
  }
`;
