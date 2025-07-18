import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BgImage from "../../../assets/hero-bg.jpg";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let userEmail, courseLink;

    if (location.state?.email && location.state?.link) {
      userEmail = location.state.email;
      courseLink = location.state.link;
      localStorage.setItem("paymentSuccess", JSON.stringify({ email: userEmail, link: courseLink }));
    } else {
      const stored = localStorage.getItem("paymentSuccess");
      if (stored) {
        const data = JSON.parse(stored);
        userEmail = data.email;
        courseLink = data.link;
      }
    }

    if (!userEmail || !courseLink) {
      navigate("/");
    } else {
      setEmail(userEmail);
      setLink(courseLink);
    }

    // Add smooth for spinner
    setTimeout(() => setLoading(false), 1000);
  }, [location.state, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm grayscale"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">🎉 Thank You!</h2>
        <p className="text-gray-700 mb-2">Your payment has been successfully confirmed.</p>
        <p className="text-gray-600 mb-6">
          My lessons take you from being an absolute beginner
          to being a skilled professional piano player.
        </p>

        <div className="border rounded-md p-4 bg-gray-100">
          <p className="font-semibold text-black mb-2">Access Your Course:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            🎹 Click here to download the Piano Course
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
