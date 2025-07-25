import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const navigate = useNavigate();
  const hasPaid = localStorage.getItem("hasPaid") === "true";
  const courseLink = localStorage.getItem("courseLink");

  useEffect(() => {
    if (!hasPaid || !courseLink) {
      navigate("/courses");
    }
  }, [hasPaid, courseLink, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Welcome to Your Course</h1>
        <p className="text-lg mb-6">Thanks for enrolling! You can now access your course below.</p>

        {courseLink ? (
          <a
            href={courseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-[#651b2e]"
          >
            Download Course
          </a>
        ) : (
          <p className="text-red-500">Course link not available. Contact support.</p>
        )}
      </div>
    </div>
  );
};

export default MyCourse;