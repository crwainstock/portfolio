import React from "react";
import { Link } from "react-router-dom";
import image from "../oleg-laptev-7jQh3EiS8Bs-unsplash.jpg";
import "../index.css";

export default function Home() {
  return (
    <main className="flex place-content-center">
      <img
        src={image}
        alt="white building walls intersecting"
        className="absolute object-cover h-full w-full"
      />
      <section className="relative justify-center items-center flex-col min-h-screen lg:pt-10rem px-8 pt-10">
        <h1 className="text-yellow-400 text-6xl flex-row font-bold leading-none lg:leading-snug sm:text-2xl home-name content-center justify-center pt-10 mt-10">
          Hi, I'm Crystal.
        </h1>
        <h4 className="flex-row content-center justify-center">
          Full Stack Developer
        </h4>
      </section>
    </main>
  );
}
