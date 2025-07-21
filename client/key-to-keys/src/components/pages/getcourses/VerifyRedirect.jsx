import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyRedirect = () => {
  const [_link, setLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      navigate("/");
      return;
    }

    fetch(`http://localhost:5000/api/payment-status?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLink(data.courseLink);
          // Redirect to thank-you page or show course access
          navigate("/thank-you");
        } else {
          alert("Payment not confirmed yet.");
          // Optional: navigate("/") or retry after some delay
        }
      })
      .catch(() => {
        alert("Error checking payment status.");
      });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-center">
      Checking your payment status, please wait...
    </div>
  );
};

export default VerifyRedirect;

