import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <nav className="container inline-flex justify-center items-center fixed bottom-0 p-4">
      <div className="flex p-4">
        <h4>©Crystal Rose-Wainstock</h4>
      </div>
      <div className="flex p-4">
        <Link
          to={{ pathname: "https://www.linkedin.com/in/crwainstock/" }}
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </div>
      <div className="flex p-4">
        <Link
          to={{ pathname: "https://github.com/crwainstock" }}
          target="_blank"
        >
          <BsGithub />
        </Link>
      </div>
    </nav>
  );
}
