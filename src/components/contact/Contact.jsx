import { contactData } from "../../AppData";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Visit Profiles</h2>
        <div className="mediaContainer">
          {contactData.map((data) => (
            <div className="mediaItems" key={data.id}>
              <a href={data.link} target="_blank" rel="noreferrer">
                <img src={data.src} alt={data.alt} title={data.title} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/maykewqd" method="POST">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            placeholder="Type Message..."
            autoComplete="off"
            required
          ></textarea>

          <button type="submit">Send E-mail</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
