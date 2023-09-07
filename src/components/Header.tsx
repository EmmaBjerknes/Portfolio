import { StyledHeaderWrapper } from "./styles/StylesHeader";
import { Link } from "react-scroll";

function Header() {
  return (
    <StyledHeaderWrapper>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <h1>Emma Bjerknes</h1>
      </Link>
    </StyledHeaderWrapper>
  );
}

export default Header;
