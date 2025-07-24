import React from "react";

const BlogCard = ({ image, title, time }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <img src={image} alt={title} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="text-xs text-gray-500">{time}</p>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-sm text-primary">Read more &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
