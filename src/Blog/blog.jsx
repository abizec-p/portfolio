import duotone from "../assets/images/duotone.jpg"
import "./blog.css"
import BlogFooter from "./blogfooter";
import BlogSideBar from "./blogsidebar";
import Mainblog from "./mainblog";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Routes,Route } from "react-router-dom";
import SingleBlog from "./singlepageblog";
export default function Blog() {
  return (
    <>
      <section className="blogsite">
        <div>
          <div className="back-to-home"></div>
          <BlogSideBar />
        </div>
        <div>
          <Routes>
            <Route path="" element={<Mainblog />} />
            <Route path="singleBlog" element={<SingleBlog />} />
          </Routes>
        </div>
        <BlogFooter />
      </section>
    </>
  );

};