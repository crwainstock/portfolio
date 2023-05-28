import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function BlogPosts() {
  const [postData, setPostData] = useState();

  return (
    <div>
      <h3>This is the blog posts page</h3>
    </div>
  );
}
