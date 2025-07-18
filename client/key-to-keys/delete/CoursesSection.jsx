import React from "react";
import CourseCard from "./CourseCard";
import beginnerImg from "../../../assets/beginner.png";
import intermediateImg from "../../../assets/intermediate.png";
import advancedImg from "../../../assets/advanced.png";

const CoursesSection = () => {
  const courses = [
    {
      title: "Beginner’s course",
      image: beginnerImg,
      price: 240,
      features: [
        "Major and minor scales",
        "Basic chords and chord types",
        "Fingering",
        "Major and minor scales",
        "Major and minor scales",
        "Major and minor scales",
      ],
    },
    {
      title: "Intermediate’s course",
      image: intermediateImg,
      price: 320,
      features: [
        "ii-V",
        "Major and minor 2-5-1s",
        "Drop 2s",
        "Major and minor scales",
        "Major and minor scales",
        "Major and minor scales",
        "Major and minor scales",
      ],
    },
    {
      title: "Advanced’s course",
      image: advancedImg,
      price: 400,
      features: [
        "Modal theory",
        "Altered chords and their uses",
        "Advanced chord substitutions",
        "Reharmonizations",
        "Upper structures",
        "Scoring complex songs",
      ],
    },
  ];

  return (
    // <section className="py-16 px-5 md:px-20 bg-gray-50">
    //   <h2 className="text-2xl font-bold mb-10">Courses</h2>

    //   {/* First row: first two cards */}
    //   <div className="flex flex-wrap justify-center gap-10 sm: justify-items-center">
    //     {courses.slice(0, 2).map((course, index) => (
    //       <div key={index} className="w-full sm:w-[300px]">
    //         <CourseCard {...course} />
    //       </div>
    //     ))}
    //   </div>

    //    {/* Second row: third card centered */}
    //   <div className="flex justify-center mt-14">
    //     <div className="w-full sm:w-[300px]">
    //       <CourseCard {...courses[2]} />
    //     </div>
    //   </div>
    // </section>
    <section id="courses" className="py-16 px-4 bg-gray-50 flex justify-center scroll-mt-24">
  <div className="w-full max-w-[1440px]">
    <h2 className="text-2xl font-bold mb-12 text-center">Courses</h2>

    {/* First row: two cards */}
    <div className="flex flex-wrap justify-center gap-10">
      {courses.slice(0, 2).map((course, index) => (
        <div key={index} className="w-full sm:w-[560px]">
          <CourseCard {...course} />
        </div>
      ))}
    </div>

    {/* Second row: one centered card */}
    <div className="flex justify-center mt-14">
      <div className="w-full sm:w-[560px]">
        <CourseCard {...courses[2]} />
      </div>
    </div>
  </div>
</section>

  );
};

export default CoursesSection;
