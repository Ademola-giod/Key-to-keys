import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VerifyRedirect = () => {
  const [loading, setLoading] = useState(true); //  Show loading spinner
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      navigate("/");
      return;
    }

    // Start checking payment status
    fetch(`${API_BASE_URL}api/payment-status?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          // Pass the course link directly to the thank-you page
          navigate("/thank-you", { state: { link: data.courseLink } });
        } else {
          alert("Payment not confirmed yet.");
          navigate("/"); // Or redirect to another page
        }
      })
      .catch(() => {
        // inside fetch error or else blocks
        toast.error("Payment not confirmed yet.", {
          autoClose: false,
        });
        navigate("/");
      })
      .finally(() => {
        setLoading(false); // stop loading if needed
      });
  }, [navigate]);

  // Return a proper loading state while payment status is being verified
  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-center">
      {loading ? (
        <div className="text-lg font-medium text-gray-700">
          🔄 Checking your payment status, please wait...
        </div>
      ) : null}
    </div>
  );
};

export default VerifyRedirect;


