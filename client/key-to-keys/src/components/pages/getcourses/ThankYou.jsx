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

    // 🟡 If no link was passed (e.g. page reload), fetch again
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
    </section>
  );
};

export default ThankYou;




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHandPointRight } from "react-icons/fa";
// import { MdVerified } from "react-icons/md";
// import BgImage from "../../../assets/hero-bg.jpg";


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const ThankYou = () => {
//   const navigate = useNavigate();

//   const [_email, setEmail] = useState(null);
//   const [link, setLink] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("userEmail");
//     if (!storedEmail) {
//       // If no email found, redirect user to homepage or course page
//       navigate("/");
//       return;
//     }
//     setEmail(storedEmail);

//     // Fetch payment/course info from backend
//     fetch(`${API_BASE_URL}api/payment-status?email=${storedEmail}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "success") {
//           setLink(data.courseLink);
//         } else {
//           setError("Payment not confirmed yet. Please contact support.");
//         }
//       })
//       .catch(() => {
//         setError("Failed to fetch course info. Please try again later.");
//       })
//       .finally(() => setLoading(false));
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-6">
//         <p className="text-red-600 text-center">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm grayscale"
//         style={{ backgroundImage: `url(${BgImage})` }}
//       ></div>

//       <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
//         <h2 className="text-2xl font-bold text-primary mb-4">🎉 Thank You!</h2>
//         <p className="text-gray-700 mb-2">
//           <MdVerified
//             className="inline align-middle w-6 text-2xl text-green-500"
//             title="verified"
//           />
//           Your payment has been successfully confirmed.
//         </p>
//         <p className="text-gray-600 mb-6">
//           My lessons take you from being an absolute beginner
//           to being a skilled professional piano player.
//         </p>

//         <div className="border rounded-md p-4 bg-gray-100">
//           <p className="font-semibold text-black mb-2">Access Your Course:</p>
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary hover:text-[#651b2e] underline"
//           >
//             <FaHandPointRight className="inline align-middle text-2xl text-[#030101] ml-1 animate-bounce" /> Click here to download the Piano Course
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThankYou;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaHandPointRight } from "react-icons/fa";
// import { MdVerified } from "react-icons/md"
// import BgImage from "../../../assets/hero-bg.jpg";

// const ThankYou = () => {
//   const _location = useLocation();
//   const navigate = useNavigate();

//   const [_email, setEmail] = useState(null);
//   const [link, setLink] = useState(null);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//   const stored = localStorage.getItem("paymentSuccess");

//   if (stored) {
//     const data = JSON.parse(stored);
//     setEmail(data.email);
//     setLink(data.link);
//   } else {
//     navigate("/");
//   }

//   // Delay to show loading spinner
//   const timeout = setTimeout(() => setLoading(false), 1000);

//   // Optional cleanup
//   return () => clearTimeout(timeout);
// }, [navigate]);

  // useEffect(() => {
    // let userEmail, courseLink;

    // if (location.state?.email && location.state?.link) {
    //   userEmail = location.state.email;
    //   courseLink = location.state.link;
    //   localStorage.setItem("paymentSuccess", JSON.stringify({ email: userEmail, link: courseLink }));
    // } else {
  //     const stored = localStorage.getItem("paymentSuccess");
  //     if (stored) {
  //       const data = JSON.parse(stored);
  //       userEmail = data.email;
  //       courseLink = data.link;
  //     }
    

  //   if (!userEmail || !courseLink) {
  //     navigate("/");
  //   } else {
  //     setEmail(userEmail);
  //     setLink(courseLink);
  //   }

  //   // Add smooth for spinner
  //   setTimeout(() => setLoading(false), 1000);
  // }, [navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-primary-50 flex items-center justify-center px-4 py-12">
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm grayscale"
//         style={{ backgroundImage: `url(${BgImage})` }}
//       ></div>

//       <div className="relative z-10 max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
//         <h2 className="text-2xl font-bold text-primary mb-4">🎉 Thank You!</h2>
//         <p className="text-gray-700 mb-2"><MdVerified className="inline aline-middle w-6 text-2xl text-green-500" title="verified"/>Your payment has been successfully confirmed. </p>
//         <p className="text-gray-600 mb-6">
//           My lessons take you from being an absolute beginner
//           to being a skilled professional piano player.
//         </p>

//         <div className="border rounded-md p-4 bg-gray-100">
//           <p className="font-semibold text-black mb-2">Access Your Course:</p>
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary hover:text-[#651b2e] underline"
//           >
//            <FaHandPointRight className="inline align-middle text-2xl text-[#030101] ml-1 animate-bounce" />Click here to download the Piano Course
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThankYou;
