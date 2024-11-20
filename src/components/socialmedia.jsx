import "./contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaInstagramSquare,
} from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="contactSocial">
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
  );
}

export default SocialMedia;
