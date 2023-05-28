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
      <section className="relative justify-center items-center flex min-h-screen lg:pt-10rem px-8">
        <h1 className="text-yellow-400 text-6xl flex-row font-bold leading-none lg:leading-snug sm:text-2xl home-name content-center">
          Hi, I'm Crystal.
        </h1>
        <h4 className="flex-row">Full Stack Developer</h4>
      </section>
    </main>
  );
}
