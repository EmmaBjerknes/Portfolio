import { AboutWrapper } from "./styles/About.styled";
import { StyledAboutCard } from "./styles/Card.styled";
import { ContentWrapper } from "./styles/ContentWrapper.styled";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <>
      <ContentWrapper id="about">
        <AboutWrapper>
          <StyledAboutCard>
            <h3>What about me?</h3>
            <p>
              I am a career-changed florist/gardener/Sales Team Lead from
              Systembolaget, who aspired to enter the world of web development.
              I am fueled by creating and continuously learning new things.
              Currently, I am deeply immersed in the frontend aspect of the
              programming world, but I also have a foothold in the backend realm
            </p>
            <p>
              I eagerly look forward to becoming a part of organizations and
              teams that emphasize comprehensive development, nurturing growth
              for both individuals and the organization as a whole. As for my
              professional journey, I am excited about advancing within the
              realm of frontend development. Still, I am equally enthusiastic
              about venturing into uncharted territories and embracing emerging
              technologies
            </p>
          </StyledAboutCard>

          <div className="icons">
            <Icon icon="devicon:react" className="large-icon MIT" />
            <Icon icon="devicon:javascript" className="large-icon MIT" />
            <Icon icon="devicon:typescript" className="large-icon MIT" />
            <Icon
              icon="file-icons:styledcomponents"
              className="large-icon MIT"
            />
            <Icon icon="devicon:nodejs" className="large-icon ISC" />
            <Icon
              icon="devicon-plain:mongodb-wordmark"
              className="large-icon"
            />
          </div>
          <div className="license-container">
            <span>icons used:</span>
            <a
              className="tooltip"
              href="https://github.com/devicons/devicon/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>

            <a
              className="tooltip"
              href="https://github.com/file-icons/icons/blob/master/LICENSE.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISC
            </a>
          </div>
        </AboutWrapper>
      </ContentWrapper>
    </>
  );
}

export default Contact;
