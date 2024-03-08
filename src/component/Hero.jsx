import React, { useEffect } from "react";
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" bg-gradient-to-r from-[#3b3765] to-[#0c0819] mt-5 sm:mt-7 lg:mt-10">
      <div className="w-11/12 sm:w-7/12 lg:w-10/12 mx-auto h-full grid lg:grid-cols-2 content-center lg:content-none items-center gap-8 lg:gap-6">
        <div data-aos="fade-right" data-aos-duration="2000">
          <p className="text-md font-mono text-center lg:text-start mb-2">
            Hi, I am
          </p>
          <h1 className="text-2xl mb-2 sm:text-4xl 2xl:text-5xl font-serif font-medium text-center lg:text-start">
            MD SUMON AHMED
          </h1>
          <span className="text-lg text-[#a993fe] sm:text-xl 2xl:text-3xl font-serif font-medium text-center lg:text-start">
            <Typewriter
              options={{
                strings: ["WEB DEVELOPER", "Front End Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="text-[11px] sm:text-sm font-thin text-center lg:text-start mt-5">
            I'm a frontend developer proficient in HTML, CSS, and JavaScript,
            dedicated to crafting intuitive and visually appealing user
            interfaces. With a passion for design and a commitment to staying
            updated on the latest trends, I collaborate with teams to deliver
            innovative solutions.
          </p>
          <ul className="flex gap-4 mt-5 justify-center lg:justify-start">
            <li className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex justify-center items-center">
              <a
                href="https://www.facebook.com/akeshchoyavalobasha?mibextid=ZbWKwL"
                className="hover:-translate-y-1 duration-300"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/md-sumon-ahamed-57573b2a1/"
                className="hover:-translate-y-1 duration-300"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex justify-center items-center">
              <a
                href="https://github.com/devschapy72"
                className="hover:-translate-y-1 duration-300"
              >
                <FiGithub />
              </a>
            </li>
            <li className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex justify-center items-center">
              <a
                href="https://twitter.com/MdSumon499"
                className="hover:-translate-y-1 duration-300"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
          {/* DOWNLOAD CV BUTTON */}
          <div className="mt-14 mb-5 text-center lg:text-start">
            <a
              href="https://drive.google.com/file/d/18VG5REdFDLRah7zdwCdKABkvbu9cU4V5/view?usp=sharing "
              className="border-2 border-[#a993fe] px-12 py-3.5 rounded-full text-sm text-[#a993fe] hover:text-white font-serif hover:bg-[#a993fe] duration-300"
            >
              RESUME
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-center lg:flex-none"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="flex items-end">
            <div className="hidden border-2 border-[#52409a] h-[3.5rem] w-[3.5rem] rounded-lg sm:flex justify-center items-center text-blue-400">
              <span className="text-4xl hover:-translate-y-1 duration-300">
                <GrReactjs />
              </span>
            </div>

            {/* HERO_IMAGE */}
            <figure>
              <img
                src="https://image.lexica.art/full_jpg/6db3e087-ce74-45e5-b025-b0b5832db0b7"
                alt="photo-image"
                className="h-[42vh] sm:h-[52vh] lg:h-[62vh] object-cover rounded-full hover:-translate-y-1.5 duration-300"
              />
            </figure>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-10 mt-6 sm:w-6/12 mx-auto">
            <div className="border-2 border-[#52409a] h-[3.5rem] w-[3.5rem] rounded-lg flex justify-center items-center text-orange-600">
              <span className="text-4xl hover:-translate-y-1 duration-300">
                <IoLogoHtml5 />
              </span>
            </div>
            <div className="border-2 border-[#52409a] h-[3.5rem] w-[3.5rem] rounded-lg flex justify-center items-center text-blue-400">
              <span className="text-4xl hover:-translate-y-1 duration-300">
                <FaCss3Alt />
              </span>
            </div>
            <div className="border-2 border-[#52409a] h-[3.5rem] w-[3.5rem] rounded-lg flex justify-center items-center text-yellow-300">
              <span className="text-3xl hover:-translate-y-1 duration-300">
                <SiJavascript />
              </span>
            </div>
            <div className="sm:hidden border-2 border-[#52409a] h-[3.5rem] w-[3.5rem] rounded-lg flex justify-center items-center text-blue-400">
              <span className="text-4xl hover:-translate-y-1 duration-300">
                <GrReactjs />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
