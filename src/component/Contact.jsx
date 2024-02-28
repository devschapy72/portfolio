import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-10/12 sm:w-9/12 lg:w-10/12 mx-auto mt-16">
      <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold">
        Contact Me
      </h2>
      <div className=" grid md:grid-cols-2 gap-10">
        <div className="grid gap-7">
          <div className="border-2 border-[#6751b9] rounded-lg h-[11rem] flex flex-col gap-2 justify-center items-center ">
            <span className="bg-[#6751b9] w-10 h-10 flex justify-center items-center rounded-xl text-2xl">
              <MdOutlineEmail />
            </span>
            <p className="text-sm font-mono">devschapy72@gmail.com</p>
          </div>
          <div className="border-2 border-[#6751b9] rounded-lg h-[11rem] flex flex-col gap-2 justify-center items-center ">
            <span className="bg-[#6751b9] w-10 h-10 flex justify-center items-center rounded-xl text-2xl">
              <FaGithub />
            </span>
            <a
              href="https://github.com/devschapy72"
              className="cursor-pointer hover:underline duration-300 text-sm"
            >
              https://github.com/devschapy72
            </a>
          </div>
        </div>

        <form action="https://formspree.io/f/mzbnerge" method="POST">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-7">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="bg-[#130f2a] border-2 rounded-md h-12 border-[#6751b9] pl-4 outline-none"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="bg-[#130f2a] border-2 rounded-md h-12 border-[#6751b9] pl-4 outline-none"
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Massage"
            className="bg-[#130f2a] resize-none border-2 rounded-md border-[#6751b9] w-full my-3 sm:my-5 pl-4 pt-3 outline-none"
          />

          <input
            type="submit"
            value="Send"
            className="bg-h-14 bg-gradient-to-r from-[#7860cd] to-[#7f69cd] w-full py-4 rounded-md cursor-pointer border-2 border-[#7860cd] duration-300 hover:bg-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
