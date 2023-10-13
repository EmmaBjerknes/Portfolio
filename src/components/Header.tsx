import { useEffect, useState } from "react";
import { StyledHeaderWrapper } from "./styles/HeaderStyles";
import {
  scrollToSection,
  setupScrollListeners,
} from "./helpers/scrollNavigation";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cleanUp = setupScrollListeners();
    return cleanUp;
  }, []);

  const handleClick = () => {
    scrollToSection("home");
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <StyledHeaderWrapper>
      <a>
        <h1
          id="home-link"
          className={isClicked ? "clicked" : ""}
          onClick={handleClick}
        >
          Emma Bjerknes
        </h1>
      </a>
    </StyledHeaderWrapper>
  );
}

export default Header;
