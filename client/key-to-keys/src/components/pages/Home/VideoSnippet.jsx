import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoSnippet = () => {
  return (
    <section className="bg-primary py-14 text-center text-white px-5">
      <h2 className="text-2xl font-semibold mb-8">Watch a snippet of the courses below;</h2>
      <div className="relative w-full max-w-xl mx-auto aspect-video rounded-xl overflow-hidden grid grid-cols-4 grid-rows-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`w-full h-full ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-red-600 rounded-full p-4 shadow-lg">
            <FaPlay />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSnippet;
