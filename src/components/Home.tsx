import BorderSvg from "./BorderSvg";
import { NavButton } from "./styles/NavButton.styled";
import { StyledHomeWrapper } from "./styles/StylesHome";
import { ContentWrapper } from "./styles/ContentWrapper.styled";
import {
  setupScrollListeners,
  scrollToSection,
} from "./helpers/scrollNavigation";
import { useEffect } from "react";

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

        <div style={{ marginTop: "1rem" }}>
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <NavButton>
              <a
                id="portfolio-link"
                href="#"
                onClick={() => scrollToSection("portfolio")}
              >
                see my projects
              </a>
            </NavButton>
            <NavButton>
              <a
                id="contact-link"
                href="#"
                onClick={() => scrollToSection("contact")}
              >
                contact me
              </a>
            </NavButton>
          </nav>
        </div>
      </StyledHomeWrapper>
    </ContentWrapper>
  );
}

export default Home;
