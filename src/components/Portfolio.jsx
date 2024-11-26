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




export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");


  const isActive = null;
  const worksData = [
    {
      category: "advertisement",
      title: "Bottle advertisement",
      description:
        " This is a Bottle advertisement i created when learning photoshop.I used photoshop for creating this.",
      image: bottleAD,
    },
    {
      category: "advertisement",
      title: "advertisement",
      description:
        " This is a Beer can advertisement i created for college project.I used photoshop, Illustration and Indesign for creating this.",
      image: advert,
    },
    {
      category: "logo",
      title: "Portfolio website",
      description: " This is a portfolio website. i created for college.",
      image: logodesign,
    },
    {
      category: "webDesign",
      title: "Portfolio website",
      description: " This is a portfolio website. i created for college.",
      image: portfolio,
    },
    {
      category: "illustration",
      title: "Portfolio website",
      description: " This is a portfolio website. i created for college.",
      image: yak,
    },
  ];
  const filteredWorks = worksData.filter(
    (work) =>
      activeCategory === "all" || work.category === activeCategory
  );

  return (
    <section className="portfolio">
      <Navigation />

      <div className="category">
        <Link onClick={()=>setActiveCategory("all")} >All</Link>
        <Link
          onClick={() => setActiveCategory("webDesign")}
        >
          Webdesign
        </Link>
        <Link
          onClick={() => setActiveCategory("advertisement")}
        >
          Advertisement
        </Link>
        <Link
          onClick={() => setActiveCategory("Illustration")}
        >
          Illustration
        </Link>
        <Link
          onClick={() => setActiveCategory("logo")}
        >
          Logo
        </Link>
      </div>

      <div className="portfolio-works-section">
        {filteredWorks.map((data, index) => (
          <div className="work-card" key={index}>
            <img src={data.image} alt="" />
            <div className="portfolio-works-details">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
