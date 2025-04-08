import "./contactform.css";
import Navigation from "./Navigation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = () => {
    ;

    emailjs
      .sendForm(
        "service_7lm1emv",
        "template_e9fhkfs",
        form.current,
        "jBTiTPqCwYBfBKyb7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <section className="contact-form-section">
      <Navigation />
      <div className="contact-container">
        <div className="contact-image"></div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h1>Wanna say something?</h1>
            <div className="contactHeading">
          <p>
            <i>
              "Feel free to reach out for any inquiries or collaborations—i'd
              love to hear from you! Whether you have a project in mind or just
              want to connect, don't hesitate to get in touch."
            </i>
          </p>
        </div>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_email" placeholder="Email" />
            <textarea
              name="message"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
          {isSent && <p>Your message has been sent successfully!</p>}
        </div>
      </div>
    </section>
  );
}
