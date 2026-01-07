import { useState } from "react";
import "./navigation.css";

import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Navigation() {
  const [isActive, SetIsActive] = useState(false);
  const [isHamburger, setHamburger] = useState(false);
  const [isMenuItem, setIsMenuItem] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname === "/project";

  const toggleClass = () => {
    if (window.innerWidth < 999) {
      SetIsActive(!isActive);
      setHamburger(!isHamburger);
      setIsMenuItem(!isMenuItem);
    }
  };
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <section className={isProjectPage ? "projectNavBar" : "top-nav"}>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">
            <h1>Abizec</h1>
          </Link>
          <span className="home-icon">
            <button
              className="upArrow"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="arrow-up">
                <FaLongArrowAltUp />
              </div>
            </button>
          </span>
        </div>
        <div>
          <ul className={isActive ? "active" : "inactive"}>
            <div className={isMenuItem ? "show-menu-item" : "menu-item"}>
              <li >
                <Link to="/portfolio" onClick={toggleClass}>
                  Portfolio{" "}
                </Link>
             
              </li>

              <li>
                <Link to="/profile" onClick={toggleClass}>
                  about
                </Link>
              </li>

              <li>
                <Link to="/skills" onClick={toggleClass}>
                  skills
                </Link>
              </li>
             
              <li>
                <Link to="/contactform" onClick={toggleClass}>
                  Contact
                </Link>
              </li>

            
            </div>
            <button
              onClick={toggleClass}
              className={isHamburger ? "cross-button" : "hamburger"}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
}
