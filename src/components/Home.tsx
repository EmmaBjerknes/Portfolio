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
        <div>
          <img className="profileImg" />
          <div className="infoBox">
            <div>
              <BorderSvg />
            </div>
            <article>
              <h3>Hello there!</h3>
              Eiusmod ad excepteur adipisicing et commodo cupidatat sint
              proident aliquip. Dolor qui culpa eiusmod veniam commodo enim. Ut
              et amet ex velit ex anim elit esse officia laboris. Occaecat sunt
              ex velit sunt ex in fugiat voluptate irure velit.
            </article>
            <div className="mirrored">
              <BorderSvg />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <NavButton>
              <a id="portfolio-link" href="#" onClick={()=>scrollToSection("portfolio")}>
                PORTFOLIO
              </a>
            </NavButton>
            <NavButton>
              <a id="contact-link" href="#" onClick={()=>scrollToSection("contact")}>
                CONTACT
              </a>
            </NavButton>
          </nav>
        </div>
      </StyledHomeWrapper>
    </ContentWrapper>
  );
}

export default Home;
