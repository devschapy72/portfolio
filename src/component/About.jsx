import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-10/12 xs:w-8/12 md:w-10/12 lg:w-10/12 mx-auto mb-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold">
          ABOUT
        </h2>
        <hr className="border-[#a993fe] border-[1px] my-4" />
      </div>
      <p className="text-xs sm:text-sm md:text-lg font-light mb-10">
        Hello! I'm Sumon Ahmed. Experienced with all stages of the development
        cycle for dynamic web projects. Having an in-depth knowledge including
        advanced HTML, CSS, TailwindCSS, JavaScript, Dom Manipulation, React.jS,
        Next.js, JSON, Responsive Design, react-router-dom, Git & GitHub.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center">
          <figure className="h-60 w-60 rounded-full overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/152070137?v=4"
              alt="image"
              className="flex"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold">
            SUMON AHMED
          </h2>
          <h4 className="text-base sm:text-lg lg:text-xl my-2 sm:my-3 font-mono">
            Web Developer
          </h4>
          <p className="font-light text-sm mb-7 sm:mb-10">
            I am working with Frontend Development. Build some web apps like
            E-commerce, Todo List, Grow business. Some projects shown the bellow
            thats my own builded. If you have more interest and any type of
            queries of me then you can contact with me.
          </p>
          <div>
            <a
              href="https://drive.google.com/uc?export=download&id=1Qy-IpsK1BAiVuKVaBOFNb2gCbiAOegQc"
              className="px-7 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-base bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
