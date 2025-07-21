import React from "react";
import BlogCard from "./BlogCard";
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";

const LatestBlogs = () => {
  const blogs = [
    {
      image: blog1,
      title: "Ways to monetize your piano skills",
      time: "7 minutes read",
    },
    {
      image: blog2,
      title: "All you need to know as a piano player in a band.",
      time: "5 minutes read",
    },
    {
      image: blog3,
      title: "Must I really know how to sightread????",
      time: "5 minutes read",
    },
  ];

  return (
    <section  id="blog" className="bg-white py-16 px-5 md:px-20">
      <h2 className="text-2xl font-bold mb-10">LATEST BLOG POSTS</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
