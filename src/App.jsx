import { Profiler, useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/hero";
import Project from "./components/project";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Work from "./components/Work";
import Blog from "./Blog/blog";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/contactform";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Project />

              <Contact />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
              
            </>
          }
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
