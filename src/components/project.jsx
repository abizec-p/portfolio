import yak from "../assets/images/yak.png";
import Advertisement from "../assets/images/advert.png";
import "./project.css";
import Navigation from "./Navigation";
import Contact from "./contact";
import dataArray from "./dataArrayProjects";

export default function Project() {
  return (
    <section id="project" className="project">
      <div className="projectTopBar">
        <div className="projectTopDescription">
          <h1>My Works</h1>
          <p>Here are some of my projects. </p>
        </div>
      </div>
      <div className="WorksContainer">
        {dataArray.map((data, index) => (
          <>
            <div className="projectCards" key={index}>
              <div>
                <img src={data.image} />
              </div>
              <div className="projectDetails" key={index}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
