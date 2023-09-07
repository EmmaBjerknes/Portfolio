import BorderSvg from "./BorderSvg";
import { CardWrapper } from "./styles/Card.styled";
import { StyledHomeWrapper } from "./styles/StylesHome";
import { Link } from "react-scroll";

function Home() {
  return (
    <StyledHomeWrapper id="home">
      <div>
        <img />
        <div className="infoBox">
          <div>
            <BorderSvg />
          </div>
          <article>
            Eiusmod ad excepteur adipisicing et commodo cupidatat sint proident
            aliquip. Dolor qui culpa eiusmod veniam commodo enim. Ut et amet ex
            velit ex anim elit esse officia laboris. Occaecat sunt ex velit sunt
            ex in fugiat voluptate irure velit.
          </article>
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <CardWrapper>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              SKILLS
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              CONTACT
            </Link>
          </CardWrapper>
        </nav>
      </div>
    </StyledHomeWrapper>
  );
}

export default Home;
