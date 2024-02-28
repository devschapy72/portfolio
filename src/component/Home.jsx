import React from "react";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="space-y-14">
      <Hero />
      <About />
      <Education />
      <Skill />
      <WorkExperience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
