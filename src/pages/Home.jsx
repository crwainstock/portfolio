import React from "react";
import { Link } from "react-router-dom";
import image from "../oleg-laptev-7jQh3EiS8Bs-unsplash.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="white building walls intersecting"
        className="absolute object-contain w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-green-400 text-6xl font-bold leading-none lg:leading-snug home-name">
          Hi, I'm Crystal.
        </h1>
      </section>
    </main>
  );
}
