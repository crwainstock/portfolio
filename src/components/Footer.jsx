import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <nav className="container inline-flex justify-center items-center bottom-0 p-4">
      <div className="flex p-4">
        <h4>©Crystal Rose-Wainstock</h4>
      </div>
      <div className="flex p-4">
        <a href="https://www.linkedin.com/in/crwainstock/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div className="flex p-4">
        <a href="https://github.com/crwainstock" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="flex p-4">
        <a href="https://twitter.com/crwainstock" target="_blank">
          <BsTwitter />
        </a>
      </div>
    </nav>
  );
}
