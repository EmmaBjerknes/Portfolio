import { StyledFooterWrapper } from "./styles/StylesFooter";

function Footer() {
  return (
    <StyledFooterWrapper>
      <a href="https://github.com/EmmaBjerknes">
        {" "}
        <img src="logos/GitHub_Logo_White.png" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/emma-bjerknes/">
        {" "}
        <img src="logos/In-White-14@2x.png" alt="linkedin" />
      </a>
    </StyledFooterWrapper>
  );
}

export default Footer;
