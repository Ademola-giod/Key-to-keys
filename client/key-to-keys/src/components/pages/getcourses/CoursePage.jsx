// import React from "react";
// import coursepage from "../../../assets/coursepage.jpg"

// const CoursePage = () => {
//   // paystack init
//   const handlePaystackPayment = () => {
//     const email = document.getElementById("userEmail").value;

//     if (!email) return alert("Please enter your email");

//     const handler = window.PaystackPop.setup({
//       key: 'pk_test_133ee1f9dfa3299a8b66ec4f8713093e1d0c8411', // ✅ Replace with your real public key
//       email,
//       amount: 30000 * 100, // ₦30,000 in kobo
//       currency: "NGN",
//       callback: function (response) {
//         // ✅ Send to backend to verify
//         fetch("http://localhost:5000/api/verify-payment", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ reference: response.reference, email }),
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.status === "success") {
//               document.getElementById("courseLink").classList.remove("hidden");
//             } else {
//               alert("Payment verification failed");
//             }
//           });
//       },
//       onClose: function () {
//         alert("Payment popup closed");
//       }
//     });

//     handler.openIframe();
//   };

//   // ✅ 2. Your UI starts here
//   return (
//     <section className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-12">
//       <div className="max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
//         <img
//           src={coursepage}
//           alt="Piano Course"
//           className="w-full h-48 object-cover mb-4"
//         />
//         <h2 className="text-xl font-bold mb-2">Key to Keys: The Keyboardist's Companion</h2>
//         <p className="text-gray-600 mb-4">
//           A structured and self-directed piano learning platform designed to equip students from the beginner to advanced level.
//         </p>
//         <ul className="text-left mb-4 text-gray-700">
//           <li><strong>Duration:</strong> ~13hrs</li>
//           <li><strong>File size:</strong> 9.9 GB</li>
//           <li><strong>Price:</strong> ₦30,000</li>
//         </ul>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full border rounded-md px-3 py-2 mb-4"
//           id="userEmail"
//         />

//         {/* ✅ Use function onClick */}
//         <button
//           className="w-full bg-primary hover:bg-[#651b2e] text-white py-3 rounded-md text-lg"
//           onClick={handlePaystackPayment}
//         >
//           Enroll Now
//         </button>

//         <div id="courseLink" className="hidden mt-4 text-green-600 font-semibold">
//           ✅ Payment confirmed! <a href="https://drive.google.com/file/d/1Pe9J5nPtxBm14mrVvfJeugSCLwqwC0ox/view?usp=drivesdk" target="_blank" className="underline">Access Course</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursePage;



// import React from "react";
// import coursepage from "../../../assets/coursepage.jpg";
// import { useNavigate } from "react-router-dom";

// const CoursePage = () => {
//   const navigate = useNavigate();

  
//     // handler.openIframe();
//   };

//   return (
//     <section className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-12">
//       <div className="max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
//         <img
//           src={coursepage}
//           alt="Piano Course"
//           className="w-full h-48 object-cover mb-4"
//         />
//         <h2 className="text-xl font-bold mb-2">Key to Keys: The Keyboardist's Companion</h2>
//         <p className="text-gray-600 mb-4">
//           A structured and self-directed piano learning platform designed to equip students from the beginner to advanced level.
//         </p>
//         <ul className="text-left mb-4 text-gray-700">
//           <li><strong>Duration:</strong> ~13hrs</li>
//           <li><strong>File size:</strong> 9.9 GB</li>
//           <li><strong>Price:</strong> ₦30,000</li>
//         </ul>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full border rounded-md px-3 py-2 mb-4"
//           id="userEmail"
//         />
        
      

//         <button
//           className="w-full bg-primary hover:bg-[#651b2e] text-white py-3 rounded-md text-lg"
//           onClick={handlePaystackPayment}
//         >
//           Enroll Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CoursePage;


import coursepage from "../../../assets/coursepage.jpg";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const _navigate = useNavigate(); // Assigned properly here

  const handlePaystackPayment = async () => {
    const email = document.getElementById("userEmail").value;

    if (!email) return alert("Please enter your email");

    try {
      // Save email to localStorage (you'll use it on /verify-redirect page)
      localStorage.setItem("userEmail", email);

      // const response = await fetch("/api/initiate-payment", 
      const response = await  fetch("http://localhost:5000/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount: 30000 * 100 }),
      });

      const data = await response.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url; // ✅ Redirect to Paystack
      } else {
        alert("Failed to start payment.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-12">
      <div className="max-w-md bg-white rounded-2xl shadow-xl p-6 text-center">
        <img
          src={coursepage}
          alt="Piano Course"
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Key to Keys: The Keyboardist's Companion</h2>
        <p className="text-gray-600 mb-4">
          A structured and self-directed piano learning platform designed to equip students from the beginner to advanced level.
        </p>
        <ul className="text-left mb-4 text-gray-700">
          <li><strong>Duration:</strong> ~13hrs</li>
          <li><strong>File size:</strong> 9.9 GB</li>
          <li><strong>Price:</strong> ₦30,000</li>
        </ul>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-md px-3 py-2 mb-4"
          id="userEmail"
        />

        <button
          className="w-full bg-primary hover:bg-[#651b2e] text-white py-3 rounded-md text-lg"
          onClick={handlePaystackPayment}
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default CoursePage;
