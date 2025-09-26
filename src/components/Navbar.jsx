import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b border-gray-200 shadow-lg">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <nav>
          <ul className="flex gap-4">
            <li
              className={activeLink === "/" ? "text-blue-500" : "text-gray-500"}
            >
              <Link to="/" onClick={() => handleClick("/")}>
                Home
              </Link>
            </li>
            <li
              className={
                activeLink === "/login" ? "text-blue-500" : "text-gray-500"
              }
            >
              <Link to="/login" onClick={() => handleClick("/login")}>
                Login
              </Link>
            </li>
            <li
              className={
                activeLink === "/dashboard" ? "text-blue-500" : "text-gray-500"
              }
            >
              <Link to="/dashboard" onClick={() => handleClick("/dashboard")}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
