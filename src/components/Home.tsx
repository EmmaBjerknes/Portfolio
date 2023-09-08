import BorderSvg from "./BorderSvg";
import { NavButton } from "./styles/NavButton.styled";
import { StyledHomeWrapper } from "./styles/StylesHome";
import { Link } from "react-scroll";

function Home() {
  return (
    <StyledHomeWrapper id="home">
      <div>
        <img className="profileImg" />
        <div className="infoBox">
          <div>
            <BorderSvg />
          </div>
          <article>
            <h3>Hello there!</h3>
            Eiusmod ad excepteur adipisicing et commodo cupidatat sint proident
            aliquip. Dolor qui culpa eiusmod veniam commodo enim. Ut et amet ex
            velit ex anim elit esse officia laboris. Occaecat sunt ex velit sunt
            ex in fugiat voluptate irure velit.
          </article>
          <div className="mirrored">
            <BorderSvg />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <NavButton>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              SKILLS
            </Link>
          </NavButton>
          <NavButton>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </NavButton>
          <NavButton>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              CONTACT
            </Link>
          </NavButton>
        </nav>
      </div>
    </StyledHomeWrapper>
  );
}

export default Home;
