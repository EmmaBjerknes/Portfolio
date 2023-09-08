import { ContentWrapper } from "./styles/ContentWrapper.styled";
import { projects } from "../db.json";
import { CardsWrapper } from "./styles/Card.styled";

function Portfolio() {
  return (
    <>
      <ContentWrapper id="portfolio">
        <CardsWrapper>
          {projects.map((project, index) => (
            <div className={`${project.status} repoCard`} key={index}>
              <img />
              <h1>{project.name}</h1>
              {project.status !== "done" && <p>{project.status}</p>}
            </div>
          ))}
        </CardsWrapper>
      </ContentWrapper>
    </>
  );
}

export default Portfolio;
