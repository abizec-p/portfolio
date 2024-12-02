import Navigation from "./Navigation";
import bottleAD from "../assets/images/waterBottle.png";
import portfolio from "../assets/images/website-design.png";
import advert from "../assets/images/advert.png";
import yak from "../assets/images/yak.png";
import logodesign from "../assets/images/logoforaj.png";
import Webdev from "./category/webdev";
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
        " This is a Bottle advertisement i created when learning photoshop.I used photoshop for creating this.",
      image: bottleAD,
    },
    {
      id: 2,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "Advertisement",
      title: "Advertisement",
      description:
        " This is a Beer can advertisement i created for college project.I used photoshop, Illustration and Indesign for creating this.",
      image: advert,
    },
    {
      id: 3,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "logo",
      title: "Logo",
      description: " This is a portfolio website. i created for college.",
      image: logodesign,
    },
    {
      id: 4,
      Client: "college project",
      skills: "Photoshop, illustrator",

      category: "webDesign",
      title: "Portfolio website",
      description: " This is a portfolio website. i created for college.",
      image: portfolio,
    },
    {
      id: 5,
      Client: "college project",
      skills: "Photoshop, illustrator",
      category: "illustration",
      title: "Portfolio website",
      description: " This is a portfolio website. i created for college.",
      image: yak,
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
              <p>{data.description}</p>
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
