import React from "react";
import Blog from "../../components/blog/Blog";
import { useEffect } from "react";

function BlogPage() {
  useEffect(function () {
    document.title = "Blog | Furni";
  });
  return <Blog />;
}

export default BlogPage;
