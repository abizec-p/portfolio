import "./blog.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function BlogSideBar() {
  return (
    <section className="blogSidebar">
      <div className="blog-nav-bar">
        <div className="back-to-home">
          <div className="BackToWebsite">
            <div className="blog-logo">
              <Link to="/blog">
                <h1>Jake's Wander Space</h1>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="blog-nav-items">
          <ul>
            <li>
              <Link to="/">
              
                <div>Back to portfolio</div>
              </Link>
            </li>
            <li>
              <Link to="/about-blog">About Blog</Link>
            </li>
            <li>
              <Link to="/about-blog">Popular</Link>
            </li>
            <li>
              <Link to="/about-blog">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
