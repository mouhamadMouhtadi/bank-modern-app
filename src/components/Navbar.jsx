import { useState } from "react";
import { close, logo, menu } from "../assets";

import { navLinks } from "../constans";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px] ml-16 " />
      <ul className="sm:flex justify-end hidden flex-1 list-none items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length.length - 1 ? "mr-0" : "mr-10"
            } text-white `}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient p-6 absolute top-20 right-0 rounded-xl min-w-[140px] my-2 mx-4 sidebar `}
        >
          <ul className="flex justify-end flex-col flex-1 list-none items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length.length - 1 ? "mr-0" : "mb-4"
                } text-white `}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
