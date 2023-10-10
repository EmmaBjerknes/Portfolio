import { ContentWrapper } from "./styles/ContentWrapper.styled";

function Contact() {
  return (
    <>
      <ContentWrapper id="contact">
        <div>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </ContentWrapper>
    </>
  );
}

export default Contact;
