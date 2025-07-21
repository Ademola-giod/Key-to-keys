import React from "react";
import { FaPlay } from "react-icons/fa";
import { useRef, useEffect } from "react";

const VideoSnippet = () => {
  

    const videoRef = useRef(null);

  useEffect(() => {
   const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          try {
            videoElement.play();
          } catch (err) {
            console.error("Autoplay failed:", err);
          }
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoElement);

    // ✅ Prevent right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);


    // ✅ Block F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C
    const blockKeys = (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl+Shift+I / Cmd+Opt+I
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.metaKey && e.altKey && e.key === "I")
      ) {
        e.preventDefault();
      }

      // Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
      }

      // Ctrl+U
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", blockKeys);

    return () => {
      observer.unobserve(videoElement);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);
   


  return (
    <section className="bg-primary py-14 text-center text-white px-5">
      <h2 className="text-2xl font-semibold mb-8">Watch a snippet of the courses below;</h2>
      <div className='w-full max-w-4xl mx-auto px-4'>
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
      
        <video
          ref={videoRef}
          controls
          controlsList="nodownload"
          className="w-full h-full object-cover"
          poster="/images/snippet-thumbnail.jpg"
          onContextMenu={(e) => e.preventDefault()}>
          <source src="/videos/course-snippet.mp4" type="video/mp4"/>        
          </video>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-red-600 rounded-full p-4 shadow-lg">
            <FaPlay /> */}
          {/* </button> */}
        {/* </div> */}
      </div>
      </div>
    </section>
  );
};

export default VideoSnippet;
