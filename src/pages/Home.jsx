import React from "react";
import { Link } from "react-router-dom";
import image from "../oleg-laptev-7jQh3EiS8Bs-unsplash.jpg";
import "../index.css";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="white building walls intersecting"
        className="absolute object-cover h-full w-full"
      />
      <section className="relative grid-rows-2 justify-center min-h-screen pt-12 lg:pt-10rem px-8">
        <h1 className="text-yellow-400 text-6xl font-bold leading-none lg:leading-snug home-name content-center">
          Hi, I'm Crystal.
        </h1>
        <h4 className="content-center">Full Stack Web Developer</h4>
      </section>
    </main>
  );
}
