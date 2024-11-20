import "./hero.css";
import Navigation from "./Navigation";
import { Link, Routes, Route } from "react-router-dom";
import Work from "./Work";
import waitingThumbnail from "../assets/images/waiting.png";
import waterBottle from "../assets/images/waterBottle.png";
import logoWork from "../assets/images/logowork.png";
import SocialMedia from "./socialmedia";


export default function Hero() {
   return (
    <section id="hero" className="hero">
      <Navigation />
      <div className="hero-div">
        <div className="hero-text">
          <h1>Abishek pariyar</h1>
          <p>Web Developer | Graphics designer | Tech Enthusiast</p>
        </div>
        <div className="hire-me-button-div">
          <button className="hireMe-button">
            <a href="#contactID">Contact me</a>
          </button>
         </div>
         <div>
           <SocialMedia/>
         </div>

      </div>
    </section>
  );
}
