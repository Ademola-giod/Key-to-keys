import React from "react";
import step1Img from "../../../assets/step1.png";
import step2Img from "../../../assets/step2.png";
import step3Img from "../../../assets/step3.png";

const steps = [
  {

    id: 1,
    title: "We teach you the concepts and break them down.",
    text: `We are not interested in making you a clone. Rather, we are focused on teaching and handing over the essential keys that open the door of professionalism and mastery on the keys.

These keys are important music theories and secrets that many professional piano players may have hidden for many years. These are the keys that will broaden your mind and make your transcription back and different from what you hear on your favorite tracks.`,
    img: step1Img,
  },
  {
    id: 2,
    title: "We teach you how to apply these concepts in real time.",
    text: `We are not interested in making you a clone. Rather, we are focused on teaching and handing over the essential keys that open the door of professionalism and mastery on the keys.

These keys are important music theories and secrets that many professional piano players may have hidden for many years. These are the keys that will broaden your mind and make your transcription back and different from what you hear on your favorite tracks.`,
    img: step2Img,
  },
  {
    id: 3,
    title: "You practice these concepts until you achieve mastery.",
    text: `We are not interested in making you a clone. Rather, we are focused on teaching and handing over the essential keys that open the door of professionalism and mastery on the keys.

These keys are important music theories and secrets that many professional piano players may have hidden for many years. These are the keys that will broaden your mind and make your transcription back and different from what you hear on your favorite tracks.`,
    img: step3Img,
  },
];



const KeysApproachSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          THE KEYS TO KEYS APPROACH
        </h2>
        <p className="text-gray-700">
          We are not interested in making you a clone. Rather, we are focused on teaching and handing over the essential keys that open the door of professionalism and mastery on the keys.
          <br /><br />
          These keys are important music theories and secrets that many professional piano players have kept hidden for many years. These are the keys that have eluded you and made your transcription basic and different from what you hear on your favorite tracks.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto mt-20 space-y-24">
        {steps.map((step) => (
          <div key={step.id} className="space-y-8">
            {/* Step Number + Title (Centered at Top) */}
            <div className="flex items-center justify-center gap-3 text-center">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {step.id}
              </span>
              <h3 className="text-lg md:text-xl font-bold uppercase">
                {step.title}
              </h3>
            </div>

            {/* Paragraph (left), Image (right) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Paragraph Block - text starts slightly inward */}
              <div className="md: w-full text-left pl-6 md:pl-12">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Image Block - sits on the right */}
              <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                <img
                  src={step.img}
                  alt={`Step ${step.id}`}
                  className="rounded-md shadow-md w-full max-w-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



// const KeysApproachSection = () => {   check here
//   return (
//     <section className="bg-white py-20 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8">
//           THE KEYS TO KEYS APPROACH
//         </h2>
//         <p className="text-gray-700 mb-16 text-center text-block">
//           We are not interested in making you a clone. 
//           Rather, we are focused on teaching and handing
//           over the essential keys that open the door of
//           professionalism and mastery on the keys.
//           These keys are important music theories and secrets 
//           that many professional piano players have kept hidden 
//           for many years. these are the keys that have ekuded you 
//           and made your transcription basic and different 
//           from what you hear on your favorite tracks.
//         </p>
//       </div>

      {/* <div className="max-w-5xl mx-auto space-y-16">
//   {steps.map((step) => ( and here
//     <div
//       key={step.id}
//       className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
//     >
//       <div className="md:w-1/2 md:pr-10 text-center">
//         <div className="flex items-center justify-center mb-4">
//           <span className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold mr-4">
//             {step.id}
//           </span>
//           <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
//         </div>
//         <p className="text-gray-700 whitespace-pre-line">{step.text}</p>
//       </div>
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src={step.img}
//           alt={`Step ${step.id}`}
//           className="rounded-md shadow-md max-h-[200px] object-cover"
//         />
//       </div>
//     </div>
//   ))}
// </div> */}

      {/* <div className=" max-w-5xl mx-auto space-y-16 px-4 ">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:gap-14 gap-10 w-full`}
          >
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold mr-4">
                  {step.id}
                </span>
                <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{step.text}</p>
            </div>
            <div className="">
              <img
                src={step.img}
                alt={`Step ${step.id}`}
                className="rounded-md shadow-md max-h-[200px] object-cover"
              />
            </div>
          </div>
        ))}
      </div> */}
//       <div className="max-w-5xl mx-auto space-y-16 px-4">
//   {steps.map((step) => (
//     <div
//       key={step.id}
//       className="flex flex-col md:flex-row items-center justify-between md:gap-14 gap-10 w-full"
//     >
//       <div className="md:w-[55%] text-left">
//         <div className="flex items-center mb-4">
//           <span className="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold mr-4">
//             {step.id}
//           </span>
//           <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
//         </div>
//         <p className="text-gray-700 whitespace-pre-line">{step.text}</p>
//       </div>

//       <div className="md:w-[45%] flex justify-end">
//         <img
//           src={step.img}
//           alt={`Step ${step.id}`}
//           className="rounded-md shadow-md max-h-[200px] object-cover"
//         />
//       </div>
//     </div>
//   ))}
// </div>

    // </section>
  // );
// };

export default KeysApproachSection;
 

  // export default KeysApproachSection;