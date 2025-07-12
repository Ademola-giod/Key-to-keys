

// const CourseCard = ({ image, title, features, price }) => {
//   const half = Math.ceil(features.length / 2);
//   const col1 = features.slice(0, half);
//   const col2 = features.slice(half);

//   return (
//     <div className=" max-w-[584px] h-auto rounded-[24px] bg-white  shadow-lg overflow-hidden ">
//       <img src={image} alt={title} className="h-[213px] w-full sm:h-[213px] object-cover rounded-t-[24px] sm:rounded-t-[24px] " />

//       <div className="p-6">
//         <h3 className="font-semibold text-xl mb-4">{title}</h3>

//         {/* Features in 2-column grid */}
//         <div className="grid grid-cols-1 left-[32px] sm:grid-cols-2 gap-y-4 sm:gap-x-[104px] w-full max-w-[520px] text-sm sm:text-base text-gray-700 mb-5 whitespace-nowrap">
//           <ul className="space-y-1 sm:space-y-2">
//             {col1.map((feature, index) => (
//               <li key={index}>• {feature}</li>
//             ))}
//           </ul>
//           <ul className="space-y-2">
//             {col2.map((feature, index) => (
//               <li key={index}>• {feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Price and Read more */}
//         <div className="flex justify-end mt-3 w-full">
        
//           <a href="#" className="text-primary text-sm hover:text-red-400">Read more &gt;&gt;</a>
//         </div>

//         {/* Enroll Button */}
//          <div className="w-full max-w-[419px] flex justify-between  sm:flex-row items-start sm:items-center gap-4 sm:gap-[114px] mt-4">
//           <span className="font-semibold text-lg ml-7 sm:ml-20">${price}</span>
//         <button className="w-1/2 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primaryHover transition">
//           ENROLL
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

