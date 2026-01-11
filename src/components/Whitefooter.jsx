import "./whitefooter.css";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import { MdEmail } from "react-icons/md";

export default function Whitefooter() {
  return (
    <>
      <section id="contactID" className="whitecontact">
        <div className="contact-flex">
          <div className="whitecontactHeading">
            <h1>Talk to me? </h1>
            <p>
              <i>
                "Feel free to reach out for any inquiries or collaborations—i'd
                love to hear from you! Whether you have a project in mind or
                just want to connect, don't hesitate to get in touch."
              </i>
            </p>
          </div>
          <div className="whitecontactContainer">
            <div className="whitecontactTextPart">
              <li>
                <div className="icon">
                  <IoMdCall />
                </div>
                +1(437)665-1393
              </li>
              <li>
                <div className="icon">
                  {" "}
                  <MdEmail />
                </div>
                swaggyabii56@gmail.com
              </li>
              <li>
                <div className="icon">
                  <IoLocation />
                </div>
                Mississauga, ON, Canada
              </li>
            </div>
            <div className="whitecontactSocial">
              <div>
                <a target="_blank" href="https://github.com/abizec-p">
                  <FaGithub />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/abishek-pariyar-004b9b1a0/"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://dribbble.com/Abizec">
                  <FaDribbble />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/thejakesproductions/"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="whitefooter">
          <p>© 2024 Abishek Pariyar. All rights reserved.</p>
          <p>Website designed and developed by Abishek Pariyar.</p>
        </footer>
      </section>
    </>
  );
}
