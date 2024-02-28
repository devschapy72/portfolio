import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import WorkExperience from "../WorkExperience";
import Contact from "../Contact";
import Error from "../Error";
import Skill from "../Skill";
import Education from "../Education";
import Project from "../Project";
import About from "../About";

const Routepath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/work" element={<WorkExperience />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routepath;
