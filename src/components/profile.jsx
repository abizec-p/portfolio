import ProfileImg from "../assets/images/imgggg.png";
import "./profile.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import resume from "../assets/file/Resume.pdf";
import Navigation from "./Navigation";
import Contact from "./contact"

export function Socials() {
  return (
    
    <div className="socialMedia">
      <a target="_blank" href="https://github.com/abizec-p">
        <FaGithub />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/abishek-pariyar-004b9b1a0/"
      >
        <FaLinkedin />
      </a>
      <a target="_blank" href="mailto:swaggyabii56@gmail.com">
        <CiMail />
      </a>
      <a target="_blank" href="https://www.instagram.com/pariyar_abizake/">
        <FaInstagramSquare />
      </a>
    </div>
  );
}

export default function Profile() {
  return (
    <section id="profileID" className="profile">
      <div>
        <Navigation />

        <div className="profileMain">
          <div className="profileImage">
            <img src={ProfileImg} alt="profile img" />
          </div>

          <div className="profileText">
            <h1>Profile</h1>
            <br />

            <p>
              I am a results-driven web developer with extensive experience in
              building dynamic and responsive websites using HTML, CSS, ReactJS,
              and WordPress. I have contributed to large-scale projects,
              collaborating effectively within teams to deliver innovative
              solutions that align with business goals. Additionally, I am
              proficient in graphic design tools like Figma, Adobe Photoshop,
              and Illustrator, enabling me to craft visually appealing and
              cohesive designs. With a passion for continuous learning and
              adaptability, I am dedicated to staying current with industry
              trends and integrating new technologies into my work to drive
              impactful results.
            </p>
            <br />
            <a href={resume} download="Resume.pdf" className="resume">
              Resume <span></span>
            </a>
          </div>
        </div>
      </div>
      <Contact/>
    </section>
  );
}
