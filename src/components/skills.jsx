import "./skills.css";
import html5 from "../assets/icons/html5.png";
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
import Whitefooter from "./Whitefooter";

function skills() {
  const skillItems = [
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
  ];

  return (
    <section id="skillsID" className="skillsSection">
      <Navigation />
      <div className="skillsText">
      </div>
      <div className="skill-list">
        <h1>Core Design Skills</h1>
        <ul>
          <li>
            <strong>Typography</strong> – font pairing, hierarchy, spacing, and
            readability
          </li>
          <li>
            <strong>Color theory</strong> – contrast, mood, and accessibility
          </li>
          <li>
            <strong>Layout & composition</strong> – grids, alignment, balance,
            and white space
          </li>
          <li>
            <strong>Visual hierarchy</strong> – guiding the viewer’s eye through
            design
          </li>
          <li>
            <strong>Brand consistency</strong> – using logos, colors, and styles
            correctly
          </li>
        </ul>
      </div>
      <div className="skillsMainBody">
        <h1 className="heading-top">Software & Technical Skills</h1>
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
      <Whitefooter/>
    </section>
  );
}

export default skills;
