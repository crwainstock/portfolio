import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>This is the project page</h3>
    </div>
  );
}
