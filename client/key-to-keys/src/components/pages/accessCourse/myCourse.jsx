
// export default MyCourse;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../../assets/keys.png"


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
  const Navbar = (
    <nav className="sticky top-0 left-0 w-full z-50 px-6 md:px-10 py-4 bg-img bg-opacity-80 backdrop-blur-md text-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 sm:ml-9">
          <img src={LogoImg} alt="logo" className="w-7 h-8 sm:w-10 sm:h-10" />
          <div className="text-xl font-bold">KEY TO KEYS</div>
        </div>
      </div>
    </nav>
  );

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
          <p className="text-red-500">Course link not available. Please contact support.</p>
        )}
      </div>
    </div>
  );
};

export default MyCourse;
