import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-20">
      <h1 className="text-yellow-400 flex justify-center font-bold lg:leading-snug sm:text-2xl mx-auto p-10">
        Sorry, the page you were looking for was not found.
      </h1>
      <button className="rounded-md bg-zinc-300 hover:bg-zinc-200 p-3 flex mx-auto">
        <Link to="/" className="link-button">
          Return to home
        </Link>
      </button>
    </div>
  );
}
