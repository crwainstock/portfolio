import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <div className="p-10 lg:pt-48 container mx-auto relative bg-stone-200">
        <section className="bg-stone-400 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="author image"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-6xl mb-4">
              Hey! I'm <span className="text-white">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <PortableText
                value={author.bio}
                // projectId="6n6s9lrw"
                // dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
