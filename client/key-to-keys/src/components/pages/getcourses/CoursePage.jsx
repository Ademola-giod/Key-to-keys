import React from "react";
import {toast} from "react-toastify"
import coursepage from "../../../assets/coursepage.jpg";
import { useNavigate } from "react-router-dom";

// Access environment variables for API base URL and Paystack Public Key
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

// console.log("paystack: public_key :", PAYSTACK_PUBLIC_KEY) 
const CoursePage = () => {
  const navigate = useNavigate(); // Assigned properly here


// check if email is valid 
  const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  
  const handlePaystackPayment = async () => {
    const email = document.getElementById("userEmail").value;

    if (!email) {
      //
      toast.error("Please enter your email", {
      position: "top-center",
      autoClose: true,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // closeButton: true,
    });
      return
    }
    // implement here
     if (!isValidEmail(email)) {
    toast.error("Please enter a valid email address", {
      position: "top-center",
    });
    return;
  }

    // Check if Paystack Public Key is available
    if (!PAYSTACK_PUBLIC_KEY) {
      // alert("Paystack Public Key is not configured. Please check environment variables.");
      console.error("Paystack Public Key (VITE_PAYSTACK_PUBLIC_KEY) is missing.");
      return;
    }

    // Check if PaystackPop is loaded
    if (typeof window.PaystackPop === 'undefined') {
      // alert("PaystackPop script not loaded. Please ensure https://js.paystack.co/v1/inline.js is in your index.html.");
      console.error("window.PaystackPop is undefined. Paystack script might not be loaded.");
      return;
    }

    try {
      // Save email to localStorage (you'll use it on /verify-redirect page)
      localStorage.setItem("userEmail", email);

      // Initialize Paystack Pop-up
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY, // Your Paystack Public Key
        email,
        // amount: 30000 * 100, // ₦30,000 in kobo
        amount: 500 * 100, // ₦500 in kobo

        currency: "NGN",
        callback: function (response) {

          // Payment successful, now verify on your backend
          console.log("Paystack callback response:", response);

          // Calls  backend to verify the payment
          fetch(`${API_BASE_URL}api/verify-payment`, { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ reference: response.reference, email }),
          })
            .then(res => {
              if (!res.ok) {
                // Handle non-2xx responses
                throw new Error(`HTTP error! status: ${res.status}`);
              }
              return res.json();
            })
            .then(data => {
              if (data.status === "success" || data.verified) { // Check for a 'verified' flag from your backend
                // alert("Payment confirmed! Accessing course link."); // Using alert for simplicity
                // document.getElementById("courseLink").classList.remove("hidden"); // If you have a hidden link
                toast.success("Payment confirmed! ", {
                  position: "top-center",
                  autoClose: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  closeButton: true,
                });                // Show the course link or navigate to a success page
                 navigate("/thank-you"); // Example: Navigate to a Thank You page
              } else {
                // alert("Payment verification failed."); // Using alert for simplicity
                toast.error("payment verification failed.", {
                position: "center",
                autoClose: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                closeButton: true,
              });
                console.error("Backend verification failed:", data);
              }
            })
            .catch(error => {
              console.error("Payment verification error:", error);
              alert("Error verifying payment with backend."); // Using alert for simplicity
            });
        },
        onClose: function () {
          // User closed the pop-up
          alert("Payment popup closed."); // Using alert for simplicity
        }
      });

      // Open the Paystack pop-up
      handler.openIframe();

    } catch (error) {
      console.error("Error initiating Paystack pop-up:", error);
      toast.error("Something went wrong initiating payment. please try again", {
      position: "top-center",
      autoClose: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: true,
    }); // Using alert for simplicity
        }

  };

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-12 font-inter">
      <div className="max-w-md bg-white rounded-2xl shadow-xl p-6 text-center w-full">
        <img
          src={coursepage}
          alt="Piano Course"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Key to Keys: The Keyboardist's Companion</h2>
        <p className="text-gray-600 mb-4 text-sm">
          A structured and self-directed piano learning platform designed to equip students from the beginner to advanced level.
        </p>
        <ul className="text-left mb-4 text-gray-700 text-base space-y-1">
          <li><strong>Duration:</strong> ~13hrs</li>
          <li><strong>File size:</strong> 9.9 GB</li>
          <li><strong>Price:</strong> ₦30,000</li>
        </ul>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#651b2e]"
          id="userEmail"
          aria-label="Enter your email"
          
        />

        <button
          className="w-full bg-primary hover:bg-[#651b2e] text-white py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          onClick={handlePaystackPayment}
        >
          Enroll Now
        </button>

        
      </div>
      
    </section>
  );
};

export default CoursePage;
