/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openbar = () => {
    setOpenMenu(!openMenu);
  };

  const closebar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-10 xl:gap-14 font-serif font-medium text-sm">
        <li>
          <NavLink to="/" className="nav_active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav_active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className="nav_active">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/skill" className="nav_active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav_active">
            Work Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className="nav_active">
            My Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav_active">
            Contact Me
          </NavLink>
        </li>
      </ul>

      {/* mobile_open_menu */}
      <div className="lg:hidden cursor-pointer">
        {openMenu ? (
          <AiOutlineClose
            onClick={closebar}
            className="text-2xl border-2 border-[#a993fe] px-1"
          />
        ) : (
          <GiHamburgerMenu onClick={openbar} className="text-2xl" />
        )}
      </div>

      {/* mobile_nav */}
      <ul
        className="lg:hidden fixed left-0 top-0 bg-[#2c294a] w-[75%] sm:w-[50%] h-screen flex flex-col justify-center items-center gap-10 text-base font-serif font-medium duration-300 z-50"
        style={{ left: openMenu ? 0 : "-100%" }}
      >
        <li onClick={openbar}>
          <NavLink to="/" className="nav_active">
            Home
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/about" className="nav_active">
            About
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/education" className="nav_active">
            Education
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/skill" className="nav_active">
            Skills
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/work" className="nav_active">
            Work Experience
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/project" className="nav_active">
            My Project
          </NavLink>
        </li>
        <li onClick={openbar}>
          <NavLink to="/contact" className="nav_active">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
