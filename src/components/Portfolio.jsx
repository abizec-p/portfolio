import Navigation from "./Navigation";
import bottleAD from "../assets/images/waterBottle.png";
import portfolio from "../assets/images/website-design.png";
import advert from "../assets/images/advert.png";
import yak from "../assets/images/yak.png";
import logodesign from "../assets/images/logoforaj.png";
import Webdev from "./category/webdev";
import lays from "../assets/images/lays.png"
import Advertisement from "./category/advertisement";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import Illustration from "./category/illustration";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const isActive = null;
  const worksData = [
    {
      id: 1,
      Client: "college project",
      skills: "Photoshop, illustrator",
      category: "advertisement",
      title: "Bottle advertisement",
      description:
        "This bottle advertisement was created during my learning process in Photoshop as part of a college project. The design focuses on presenting the product in a visually appealing and marketable way, incorporating creative use of colors, textures, and lighting effects. By leveraging Photoshop's advanced tools, I developed a clean and modern layout that highlights the product's features while ensuring brand consistency. This project reflects my growing expertise in advertisement design and my ability to translate concepts into professional-quality visuals.",
      image: bottleAD,
    },
    {
      id: 2,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "Advertisement",
      title: "Advertisement",
      description:
        " This advertisement was designed as part of a college project to promote a beer can. The project required a combination of creativity and technical expertise to create an eye-catching, professional design that effectively communicates the product's appeal. Using Photoshop, Illustrator, and InDesign, I developed a visually striking layout that highlights the product's features and branding. This advertisement showcases my ability to integrate typography, color schemes, and graphic elements to create a compelling and polished final piece suitable for various marketing platforms.",
      image: advert,
    },
    {
      id: 3,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "logo",
      title: "Logo",
      description:
        " This logo design was created as part of a college project to showcase my skills in branding and visual identity. The design process involved extensive brainstorming, sketching, and refining to craft a logo that is both visually appealing and meaningful. Using Photoshop and Illustrator, I focused on achieving a balance between modern aesthetics and timeless appeal. This project demonstrates my ability to conceptualize and execute a professional logo, ensuring versatility for use across various platforms and mediums. The final design reflects attention to detail, creativity, and a strong understanding of branding principles.",
      image: logodesign,
    },
    {
      id: 4,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "webDesign",
      title: "Portfolio website",
      description:
        " This is a portfolio website I designed and developed as part of a college project. The website showcases my creativity and technical skills, emphasizing clean design, intuitive navigation, and dynamic visuals. It highlights various projects, including my illustration work, with a focus on integrating high-quality graphics like a Himalayan yak to represent a unique and personal touch. This project allowed me to blend my proficiency in Photoshop and Illustrator to create a visually appealing and professional online portfolio that can be easily customized for different audiences.",
      image: portfolio,
    },
    {
      id: 5,
      Client: "college project",
      skills: "Photoshop, illustrator",
      category: "illustration",
      title: "Himalayan yak",
      description:
        "This illustration of a Himalayan yak was created as part of a college project to explore the beauty of wildlife and cultural symbolism. Using Photoshop and Illustrator, I brought the majestic yak to life through detailed textures, vibrant colors, and dynamic shading. The project emphasizes my ability to combine artistic creativity with technical skills to produce a visually captivating and culturally inspired piece. This illustration highlights my attention to detail and passion for creating meaningful artwork that resonates with diverse audiences.",
      image: yak,
    },
    {
      id: 6,
      Client: "Lays (But college project)",
      skills: "Photoshop, Photography, Direction, Strategy making",
      category: "Advertisement",
      title: "Lays AD",
      description:
        "This Lays advertisement was conceptualized and executed as part of a college project to demonstrate my skills in creative direction and strategic advertising. The project involved crafting a visually engaging and marketable campaign, starting from ideation to execution. Using Photoshop, photography, and design principles, I developed a compelling advertisement that highlights the brand’s essence while appealing to the target audience. This project showcases my ability to integrate visual storytelling with marketing strategies to create an impactful and professional advertisement.",
      image: lays,
    },
  ];
  const filteredWorks = worksData.filter(
    (work) => activeCategory === "all" || work.category === activeCategory
  );
  const handleCardClick = (data) => {
    setSelectedCard(data);
  };
  const closePopUp = () => {
    setSelectedCard(null);
  };

  return (
    <section className="portfolio">
      <Navigation />

      <div className="category">
        <Link onClick={() => setActiveCategory("all")}>All</Link>
        <Link onClick={() => setActiveCategory("webDesign")}>Webdesign</Link>
        <Link onClick={() => setActiveCategory("advertisement")}>
          Advertisement
        </Link>
        <Link onClick={() => setActiveCategory("Illustration")}>
          Illustration
        </Link>
        <Link onClick={() => setActiveCategory("logo")}>Logo</Link>
      </div>

      <div className="portfolio-works-section">
        {filteredWorks.map((data, index) => (
          <motion.div
            onClick={() => handleCardClick(data)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="work-card"
            key={data.id}
          >
            <img src={data.image} alt="" />
            <div className="portfolio-works-details">
              <h1>{data.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCard && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopUp}
        >
          <motion.div
            className="popup-content"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <img className="popup-image" src={selectedCard.image}></img>
              <button onClick={closePopUp}>X</button>
            </div>
            <div className="popup-details">
              <h2>{selectedCard.title}</h2>
              <p>{selectedCard.description}</p>
              <br />
              <h4>Client:</h4>
              <p>{selectedCard.Client}</p>
              <br />
              <h4>Type of work:</h4>
              <p>{selectedCard.category}</p>
              <br />
              <span>
                <h4>skills:</h4>
              </span>{" "}
              <p className="card-skills">{selectedCard.skills}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
