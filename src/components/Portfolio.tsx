import { ContentWrapper } from "./styles/ContentWrapper.styled";
import { projects } from "../db.json";
import { CardsWrapper, StyledRepoCard } from "./styles/Card.styled";
import { RepoLinks } from "./styles/Buttons.styled";

interface Project {
  url: string;
  name: string;
  status: string;
  description: string;
  site?: string;
}

function Portfolio() {
  const projectStatus = (project: Project) => {
    if (project.status !== "done") {
      return <p>{project.status}</p>;
    } else {
      return (
        <>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            Site
          </a>
        </>
      );
    }
  };
  return (
    <>
      <ContentWrapper id="portfolio">
        <CardsWrapper>
          {projects.map((project, index) => (
            <StyledRepoCard className={` repoCard${index}`} key={index}>
              <h3>{project.name}</h3>
              <RepoLinks>{projectStatus(project)}</RepoLinks>
            </StyledRepoCard>
          ))}
        </CardsWrapper>
      </ContentWrapper>
    </>
  );
}

export default Portfolio;
