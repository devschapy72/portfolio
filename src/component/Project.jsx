import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-10/12 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold">
          My Projects
        </h2>
        <hr className="border-[#a993fe] border-[1px] my-3" />
        <p className="mb-5 text-sm font-light sm:w-8/12 md:w-7/12 lg:w-5/12 ">
          Here are some projects I've done. I am still working on some projects
          that will be added here soon. You can explore my projects and give me
          your valuable feedback. Thank you very much.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/*  Watch Project */}
        <div className="bg-[#463c71] rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <figure>
              <img
                src="https://images8.alphacoders.com/463/463381.jpg"
                alt="projectImage"
                className="h-[10rem] w-full object-cover"
              />
            </figure>
            <h2 className="absolute top-0 left-0 w-full h-full text-white font-mono text-xl flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-[#000000bd] duration-300">
              Watch
            </h2>
          </div>
          <p className="text-center my-3 font-serif text-sm">Watch</p>
          <div className="flex justify-center">
            <a
              href="https://mywatchecommerce.netlify.app"
              className=" border-2 border-[#a993fe] hover:bg-[#a993fe] duration-300 py-3 px-16 mb-3"
            >
              View Project
            </a>
          </div>
        </div>

        {/*  Sumon Store Project */}
        <div className="bg-[#463c71] rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <figure>
              <img
                src="https://st4.depositphotos.com/5653638/40616/i/450/depositphotos_406160128-stock-photo-cheerful-indian-family-shopping-diwali.jpg"
                alt="projectImage"
                className="h-[10rem] w-full object-cover"
              />
            </figure>
            <h2 className="absolute top-0 left-0 w-full h-full text-white font-mono text-xl flex justify-center items-center opacity-0 hover:opacity-100  hover:bg-[#000000bd] duration-300">
              Sumon Store
            </h2>
          </div>
          <p className="text-center my-3 font-serif text-sm"> Sumon Store</p>
          <div className="flex justify-center">
            <a
              href="https://sumoneocmproject.netlify.app"
              className=" border-2 border-[#a993fe] hover:bg-[#a993fe] duration-300 py-3 px-16 mb-3"
            >
              View Project
            </a>
          </div>
        </div>

        {/* BD Shop Project */}
        <div className="bg-[#463c71] rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/full-length-two-joyful-girls-sweaters-running-together-with-packages-looking-away-white-wall_171337-2680.jpg?size=626&ext=jpg&ga=GA1.1.1987737718.1707836024&semt=ais"
                alt="projectImage"
                className="h-[10rem] w-full object-cover"
              />
            </figure>
            <h2 className="absolute top-0 left-0 w-full h-full text-white font-mono text-xl flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-[#000000bd] duration-300">
              BD Shop
            </h2>
          </div>
          <p className="text-center my-3 font-serif text-sm">BD Shop</p>
          <div className="flex justify-center">
            <a
              href="https://sumonbdshop.netlify.app"
              className=" border-2 border-[#a993fe] hover:bg-[#a993fe] duration-300 py-3 px-16 mb-3"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
