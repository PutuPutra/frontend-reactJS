/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import lightMode from "../../assets/website/light-mode.png";
import darkMode from "../../assets/website/dark-mode.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative">
      <img
        src={theme === "dark" ? darkMode : lightMode}
        alt="Toggle theme"
        onClick={toggleTheme}
        className="w-8 cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
