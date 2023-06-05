import React, { useEffect, useState } from "react";
import { Link, useParams, useLoaderData, defer, Await } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  // const dataPromise = useLoaderData();
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
    title,
    _id,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body,
    "authorName": author->name,
    "authorImage": author->image
  }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  // console.log(slug); Nothing. Not even attempting to console.log

  console.log(singlePost);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-stone-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.authorName}
                  className="w-10 h-10 rounded-full"
                />
                <p className="flex items-center pl-2 text-xl">
                  {singlePost.authorName}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full sm:px-2">
          <PortableText
            value={singlePost.body}
            // projectId="6n6s9lrw"
            // dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

//Block content is no longer standard. Use PortableText instead -- directions for migration online
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
