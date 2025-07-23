import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VerifyRedirect = () => {
  const [loading, setLoading] = useState(true); // ✅ Show loading spinner
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
          // ✅ Pass the course link directly to the thank-you page
          navigate("/thank-you", { state: { link: data.courseLink } });
        } else {
          alert("Payment not confirmed yet.");
          navigate("/"); // Or redirect to another page
        }
      })
      .catch(() => {
        alert("Error checking payment status.");
        navigate("/");
      })
      .finally(() => {
        setLoading(false); // stop loading if needed
      });
  }, [navigate]);

  // ✅ Return a proper loading state while payment status is being verified
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


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  //from .env api route
// const VerifyRedirect = () => {
//   const [_link, setLink] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const email = localStorage.getItem("userEmail");
//     if (!email) {
//       navigate("/");
//       return;
//     }

//     fetch(`${API_BASE_URL}api/payment-status?email=${email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "success") {
//           setLink(data.courseLink);
//           // Redirect to thank-you page or show course access
//           navigate("/thank-you");
//         } else {
//           alert("Payment not confirmed yet.");
//           // Optional: navigate("/") or retry after some delay
//         }
//       })
//       .catch(() => {
//         alert("Error checking payment status.");
//       });
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 text-center">
//       Checking your payment status, please wait...
//     </div>
//   );
// };

// export default VerifyRedirect;

