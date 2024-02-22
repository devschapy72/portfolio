import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center pt-[12rem] gap-10">
      <p className="text-xl md:text-2xl lg:text-4xl">
        Oops! Something went wrong. Please try again later.
      </p>
      <NavLink to="/">
        <button className="bg-[#6751b9] px-16 xl:px-20 border-2 border-[#6751b9] rounded-sm py-3 md:py-4 lg:text-sm xl:text-lg font-serif font-medium hover:bg-transparent duration-300">
          go back
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
