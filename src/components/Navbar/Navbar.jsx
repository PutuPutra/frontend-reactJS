import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import darkBag from "../../assets/website/bag-dark.png";
import whiteBag from "../../assets/website/bag-white.png";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#s",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#s",
  },
];
const Navbar = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This effect checks the current theme
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "dark");
  }, []);

  // Function to handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Save theme preference
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              {/* Change bag image based on theme */}
              <img src={isDarkMode ? whiteBag : darkBag} alt="Logo" className="w-10" />
              Trendify
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode switch */}
            <div onClick={toggleDarkMode}>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="justify-center flex">
        <ul className="sm:flex hidden gap-4 items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary transition duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 hover:text-primary">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] shadow-md rounded-md bg-gray-50 p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li
                    key={data.id}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
