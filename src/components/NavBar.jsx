import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="text-blue-600">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
