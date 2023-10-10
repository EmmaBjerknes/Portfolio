import { useEffect } from "react";
import { StyledHeaderWrapper } from "./styles/StylesHeader";
import { scrollToSection, setupScrollListeners } from "./helpers/scrollNavigation";

function Header() {
  useEffect(() => {
    const cleanUp = setupScrollListeners();
    return cleanUp;
  }, []);

  return (
    <StyledHeaderWrapper>
      <a id="home-link" href="#" onClick={()=>scrollToSection("home")}>
        <h1>Emma Bjerknes</h1>
      </a>
    </StyledHeaderWrapper>
  );
}

export default Header;