import Navigation from "./Navigation";
import bottleAD from "../assets/images/waterBottle.png";
import portfolio from "../assets/images/website-design.png"
import advert from "../assets/images/advert.png";
import yak from "../assets/images/yak.png";
import logodesign from "../assets/images/logoforaj.png";
import "./portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  
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

  return (
    <section className="portfolio">
      <Navigation />
      <div className="category">
        <Link to="/webdesign">Webdesign</Link>
        <Link to="/advertisement">Advertisement</Link>
        <Link to="/Illustration">Illustration</Link>
        <Link to="/logo">Logo</Link>
      </div>
      <div className="portfolio-works-section">
        {worksData.map((data, index) => (
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
