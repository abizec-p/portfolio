import ProfileImg from "../assets/images/imgggg.png";
import "./profile.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import resume from "../assets/file/Resume.pdf";
import Navigation from "./Navigation";
import topImg from "../assets/images/about-me-abizec.jpg";
import Contact from "./contact";

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
    <>
      <section id="profileID" className="profile">
        <div>
          <div className="top-profile-section">
            <Navigation />
            <div className="profile-heading">
              -Profile-
              <div className="resume-section">
                <a href={resume} download="Resume.pdf" className="resume">
                  Resume <span></span>
                </a>
              </div>
            </div>

            <div className="profileText">
              <div className="first-part-about">
                <p>
                  Hi, Im Abizec – a passionate web developer and graphic
                  designer from Nepal, now calling Canada home. My journey
                  started when I was 19, diving into the world of web
                  development. Along the way, I made plenty of mistakes, but I
                  have grown with each one, building my craft and finding what
                  truly excites me. I approach everything practically and focus
                  on what works for the client, not rules or trends. Whether its
                  code or design, I bring my passion and curiosity to every
                  project.
                </p>
                            <br />
                            <br />

              </div>
            </div>
            </div>

            <div className="second-part-about">
              <h1>My Craft</h1>
              <p>
                I specialize in HTML, CSS, JavaScript, and ReactJS, but my
                expertise doesn’t end there. As a graphic designer, I also blend
                creativity and functionality in my designs, ensuring they not
                only look good but also deliver results. I believe in adapting
                to my clients needs and always strive for practical solutions
                that exceed expectations. No matter the project, my focus is on
                creating user-friendly experiences that leave a lasting
                impression.
              </p>
              <h1>Beyond the Screen</h1>
              <p>
                When I'm not coding or designing, you’ll likely find me with a
                camera in hand. Photography is my creative outlet – a way to
                capture the world around me and bring that same eye for detail
                to my work. It’s through this lens that I see the beauty in both
                the smallest and the biggest things, and it constantly inspires
                the work I do.
              </p>
              <p>
                You can see some of my works on{" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/pariyar_abizake/"
                >
                  Instagram
                </a>
              </p>
              <h1>Why hire me?</h1>
              <p>
                I’m all about bringing ideas to life—whether it’s designing
                eye-catching visuals, building clean and responsive websites, or
                capturing great photos. With skills in both design and
                development, I can handle a project from start to finish. I
                focus on what works best for you, not just what’s trendy. I’m
                easy to work with, detail-oriented, and always down to solve
                creative problems. If you want someone who gets the job done and
                keeps it real, let’s work together.
              </p>
            </div>
          </div>
      </section>
      <Contact/>
      <div></div>
    </>
  );
}
