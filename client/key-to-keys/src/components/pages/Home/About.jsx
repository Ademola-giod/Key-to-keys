import React from "react";
;
import tutorImg from "../../../assets/authorPics.png";  



const AboutTutor = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <img
          src={tutorImg}
          alt="Tutor"
          className="w-[444px]  md:w-[481px] md:h-[598px] object-cover rounded-[24px] shadow-lg"
        />

        <div className="flex-1 flex flex-col gap-4 ml-0 lg:ml-8">
          <h1 className="text-xl font-bold">About the tutor</h1>
          < div className="text-white text-base leading-relaxed">
            Temitope Jonathan Egbeyemi is a contemporary gospel Keyboardist
            and medical doctor in the field of surgery.
            <br/>
            <br/>
            He started his music career in a local church under the Redeemed 
            Christian Church of God in the year 2005.
            <br/>
            <br/>
            He became a music instructor in the year 2013. Ever since, he has taught
            no less than forty beginner students and successfully mentored no less
            than ten students who currently play the keyboard at intermediate and
            advanced level.
            <br/>
            <br/>
            Having played the keyboard at countless notable Christian assemblies,
            he once served as the choir director of the largest Christian Fellowship
            at the University of Ibadan, the Ibadan Varsity Christian Union.
            <br/>
            <br/>
            In addition, he served as the instrumentalists' coordinator for the umbrella
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
