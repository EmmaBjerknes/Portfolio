import styled from "styled-components";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  gap: 50px;
  margin: 0px auto 5rem auto;
  .contact-header {
  }
  a {
    display: flex;
    align-items: center;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .contact-divider {
    display: flex;
    align-items: center;
    gap: 1px;
    justify-content: center;
  }
  hr {
    width: 100%;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
  }
`;
