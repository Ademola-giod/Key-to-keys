import React from "react";
import { FaEnvelope, FaInstagram, FaTwitter, } from "react-icons/fa";
import tutorImg from "../../../assets/authorPics.png";  

// const AboutTutor = () => {
//   return (
//     <section id="about" className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 py-16">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         <img
//           src={tutorImg}
//           alt="Tutor"
//           className="w-[481px] h-[598px] object-cover rounded-[24px] shadow-lg"
//         />
//         <div>
//           <h2 className="text-xl font-bold mb-4">About the tutor</h2>
//           <p className="text-sm text-gray-300 mb-4 leading-relaxed">
//             With over 15 years of professional playing, Egbeyemi Temitope Jonathan is a force to reckon with
//             when it comes to excellent musicianship. He is a medical doctor with a deep passion for music.
//             He has served as lead pianist and music director in various churches such as The Ibadan Varsity Christian Union (IVCU),
//              The Redeemed Christian Church of God (RCCG), as well as in community groups such as the Royal Priesthood Harmonics,
//               and The Assembly of University Campus Student Fellowship (AUCSF).
//             <br /><br />
//             He has taught several students who have gone on to be exceptional pianists and 
//             excellent musicians. He has a knack for teaching complex concepts in a very simple 
//             and easy-to-understand way. He has authored several music theory books to educate
//              musicians and singers alike to become better at their craft.
//           </p>

//           <div className="flex items-center gap-4 mt-6">
//             <FaInstagram className="text-pink-600 text-lg" />
//             <FaTwitter className="text-pink-600 text-lg" />
//             <FaEnvelope className="text-pink-600 text-lg" />
//             <a
//               href="mailto:Temitopeegbeyemi@gmail.com"
//               className="text-sm text-white underline"
//             >
//               Temitopeegbeyemi@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTutor;


const AboutTutor = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <img
          src={tutorImg}
          alt="Tutor"
          className="w-full max-w-sm md:w-[481px] md:h-[598px] object-cover rounded-[24px] shadow-lg"
        />

        <div className="w-[571px] h-[496px] flex flex-col gap-4 ml-8">
          <h2 className="text-xl font-bold">About the tutor</h2>
          < div className="text-white text-base leading-relaxed">
            Temitope Jonathan Egbeyemi is a contemporary gospel Keyboardist
            and medical doctor in the field of surgery.
            <br/>
            <br/>
            He started his music career in a local church under the Redeemed 
            Christian Church of God in the year 2025.
            <br/>
            <br/>
            He became a music instructor in the year 2013. Ever since, he has taught
            no less than forty beginner students and successfully mentored no less
            than ten students who currently play the keyboard at intermediate and
            advanced level.
            <br/>
            <br/>
            Having played the keyboar at countries notable Christian assemblies,
            he once served as the choir director of the largest Christian Fellowship
            at the University of Ibadan, the Ibadan Varsity Christian Union.
            <br/>
            <br/>
            In addition, He served as the instrumentalists' coordinator for the umbrella
            Christian Fellowship of the University of Ibadan, the Assembly of Unibadan 
            Christain Student Fellowship for four years.
            <br/>
            <br/>
             He has written and published a book which asesses keyboardists'
             knowledge of music theory, general knowledge about keyboards and
             their assesses.

            
          </div>
          
{/* 
          <div className="flex items-center gap-3 mt-4">
            <FaInstagram className="text-primary text-lg" />
            <FaTwitter className="text-primary text-lg" />
            
            {/* <a
              href="mailto:Temitopeegbeyemi@gmail.com"
              className="text-sm text-white underline"
            > */}
            
            {/* </a> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutTutor;
