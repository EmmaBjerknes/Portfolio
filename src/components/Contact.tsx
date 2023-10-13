import { ContentWrapper } from "./styles/ContentWrapper.styled";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailIcon from "@mui/icons-material/Email";
import { ContactDiv } from "./styles/ContactDiv.styled";

function Contact() {
  return (
    <>
      <ContentWrapper id="contact">
        <ContactDiv>
          <div className="contact-header">
            <h3>Contact</h3>
          </div>
          <div className="contact-info">
            <a
              href="mailto:bjerknes.emma@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <KeyboardArrowRightIcon />
              bjerknes.emma@gmail.com
            </a>
            <div className="contact-divider">
              <hr />
              <EmailIcon />
              <hr />
            </div>

            <a
              href="https://www.linkedin.com/in/emma-bjerknes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <KeyboardArrowRightIcon />
              Linkedin
            </a>
          </div>
        </ContactDiv>
      </ContentWrapper>
    </>
  );
}

export default Contact;
