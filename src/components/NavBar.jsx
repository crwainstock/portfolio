import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <nav className="flex">
          <NavLink
            to="/"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-400 mx-1.5 sm:mx-6"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-400 mx-1.5 sm:mx-6"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-400 mx-1.5 sm:mx-6"
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-400 mx-1.5 sm:mx-6"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
