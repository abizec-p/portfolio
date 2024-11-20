import Navigation from "./Navigation";
import bottleAD from "../assets/images/waterBottle.png";
import advert from "../assets/images/advert.png";
import "./portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const worksData = [
    {
      category:"advertisement",
      title: "Bottle advertisement",
      description:
        " This is a Bottle advertisement i created when learning photoshop.I used photoshop for creating this.",
      image: bottleAD,
    },
    {
      category:"advertisement",
      title: "advertisement",
      description:
        " This is a Beer can advertisement i created for college project.I used photoshop, Illustration and Indesign for creating this.",
      image: advert,
    },
  ];

  return (
    <section className="portfolio">
      <Navigation />
      <div className="category">
        <Link to="/webdesign">Webdesign</Link>
        <Link to="/advertisement">Advertisement</Link>
        <Link to="/Illustration">Illustration</Link>
      </div>
      <div className="port