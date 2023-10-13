import BorderSvg from "./BorderSvg";
import { StyledHomeWrapper } from "./styles/HomeWrapper.styled";
import { ContentWrapper } from "./styles/ContentWrapper.styled";
import {
  setupScrollListeners,
  scrollToSection,
} from "./helpers/scrollNavigation";
import { useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Home() {
  useEffect(() => {
    const cleanUp = setupScrollListeners();
    return cleanUp;
  }, []);

  return (
    <ContentWrapper id="home">
      <StyledHomeWrapper>
        <img srcSet="/images/profile.jpg" className="profileImg" />
        <div className="infoBox">
          <div>
            <BorderSvg />
          </div>
          <article>
            <h3>Hello, I'm Emma!</h3>
            I'm dedicated to crafting captivating web experiences. My goal is to
            excel as a Frontend, Web, or JavaScript Developer after my studies,
            contributing creativity and technical expertise to the field.
          </article>
          <div className="mirrored">
            <BorderSvg />
          </div>
        </div>

        <div className="navContainer">
          <div className="navItem">
            <a id="portfolio-link" onClick={() => scrollToSection("portfolio")}>
              <KeyboardArrowRightIcon />
              see my projects
            </a>
          </div>
          <div className="navItem">
            <a id="contact-link" onClick={() => scrollToSection("contact")}>
              <KeyboardArrowRightIcon />
              contact me
            </a>
          </div>
        </div>
      </StyledHomeWrapper>
    </ContentWrapper>
  );
}

export default Home;
