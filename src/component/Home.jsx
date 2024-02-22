import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import Education from "./Education";
import Project from "./Project";

const Home = () => {
  return (
    <div className="space-y-14">
      <Hero />
      <Education />
      <Skill />
      <WorkExperience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
