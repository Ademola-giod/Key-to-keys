
// export default MyCourse;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BgImage from "../../../assets/hero-bg.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MyCourse = () => {
  const navigate = useNavigate();
  const [courseLink, setCourseLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      navigate("/courses"); // No email? Bounce back.
      return;
    }

    // Fetch payment status
    fetch(`${API_BASE_URL}api/payment-status?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setCourseLink(data.courseLink);
          localStorage.setItem("hasPaid", "true");
          localStorage.setItem("courseLink", data.courseLink);
        } else {
          navigate("/courses");
        }
      })
      .catch(() => {
        navigate("/courses");
      })
      .finally(() => setLoading(false));
  }, [navigate]);




  // 

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
      
      {/* Top navbar style with logo on the left */}
      

      {/* Centered loading content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 text-gray-700 text-lg">
          <span className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
          <p>Checking your course access...</p>
        </div>
      </div>
    </div>
    );
  }



  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
            {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 blur-sm"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      
      <div className="relative z-10 max-w-xl w-full text-center bg-white/90 backdrop-blur-lg rounded-lg p-8 shadow-md">
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
          <p className="text-red-500">Course link not available. Please contact support.</p>
        )}
      </div>
    </div>
  );
};

export default MyCourse;
