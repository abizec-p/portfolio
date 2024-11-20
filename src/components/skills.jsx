import "./skills.css";
import html5 from '../assets/icons/html5.png'
import css3 from "../assets/icons/css3.png";
import reactJS from "../assets/icons/react.png";
import js from "../assets/icons/js.png";
import Photoshop from "../assets/icons/ps.png";
import Illustrator from "../assets/icons/illustrator.png";
import Indesign from "../assets/icons/indesign.png";
import premiere from "../assets/icons/premiere pro.png";
import Figma from "../assets/icons/figma.png";
import Navigation from "./Navigation";
import Contact from "./contact";

function skills() {
  const skillItems = [
    {
      title: "Web development",
      skillSet: [
        {
          itemName: "Html5",
          image: html5,
        },
        {
          itemName: "CSS3",
          image: css3,
        },
        {
          itemName: "ReactJs",
          image: reactJS,
        },
        {
          itemName: "Javascript",
          image: js,
        },
      ],
    },
    {
      title: "Graphics designing",
      skillSet: [
        {
          itemName: "Adobe Photoshop",
          image: Photoshop,
        },
        {
          itemName: "Adobe Illustrator",
          image: Illustrator,
        },
        {
          itemName: "Adobe Indesign",
          image: Indesign,
        },
        {
          itemName: "Adobe premiere pro",
          image: premiere,
        },
        {
          itemName: "figma",
          image: Figma,
        },
      ],
    },
  ];

  return (
    <section id="skillsID" className="skillsSection">
      <Navigation />
      <div className="skillsText">
        <h1>What I am actually good at?</h1>
      </div>
      <div className="skillsMainBody">
        {skillItems.map((item, index) => (
          <div className="skillsCard" key={index}>
            <div className="skillsContainerHeading" key={index}>
              <h1>{item.title}</h1>
              <div className="skillsContainer">
                {item.skillSet.map((data, i) => (
                  <div className="skillsContainerList" key={i}>
                    <img src={data.image} alt="img"></img>
                    <div key={i}>{data.itemName}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottomLineSkills"></div>
      <Contact />
    </section>
  );
}

export default skills;
