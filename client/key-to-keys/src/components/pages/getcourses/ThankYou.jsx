import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import BgImage from "../../../assets/hero-bg.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      navigate("/");
      return;
    }

    // ✅ Use passed link if available
    const linkFromRedirect = location.state?.link;
    if (linkFromRedirect) {
      setLink(linkFromRedirect);
      setLoading(false);
      return;
    }

    // If no link was passed ( page reload), fetch again
    fetch(`${API_BASE_URL}api/payment-status?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLink(data.courseLink);
        } else {
          setError("Payment not confirmed yet. Please contact support.");
        }
      })
      .catch(() => {
        setError("Failed to fetch course info. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [navigate, location.state]);

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error screen
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-600 text-center">{error}</p>
      </div>
    );
  }

  // Thank you screen
  return (
    <section className="relative min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm grayscale"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">🎉 Thank You!</h2>
        <p className="text-gray-700 mb-2">
          <MdVerified className="inline align-middle w-6 text-2xl text-green-500" title="verified" />
          Your payment has been successfully confirmed.
        </p>
        <p className="text-gray-600 mb-6">
          My lessons will take you from being an absolute beginner to being a skilled professional piano player.
        </p>

        <div className="border rounded-md p-4 bg-gray-100">
          <p className="font-semibold text-black mb-2">Access Your Course:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-[#651b2e] underline"
          >
            <FaHandPointRight className="inline align-middle text-2xl text-[#030101] ml-1 animate-bounce" /> Click here to download the Piano Course
          </a>
        </div>
      </div>



      <div classname="">
        <p>!! You will be granted access to download the course in few minutes !! can be also viewed in homepage after payment ..!!</p>
      </div>
    </section>
  );
};

export default ThankYou;
