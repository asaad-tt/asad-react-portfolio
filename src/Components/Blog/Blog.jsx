import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog_child">
        <h1>Coming Soon</h1>
        <Link to="/" className="btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
