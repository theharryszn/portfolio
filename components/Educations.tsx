import React from "react";

export type Education = {
  level: string;
  school: string;
  date: string;
  location: string;
};

export const educations: Education[] = [
  {
    level: "O Level",
    school: "St. Peter's Catholic Private College",
    date: "July 2019",
    location: "London, UK",
  },
  {
    level: "Advanced Diploma in Software Engineering",
    school: "Aptech Computer Education",
    date: "January 2022",
    location: "Abeokuta, Nigeria",
  },
];

const Educations = () => {
  return (
    <section className='section '>
      <div className='section-title'>Educations</div>
      <div className='section-body'>
        <div className='grid grid-cols-1 gap-10'>
          {educations.map((edu, index) => {
            return (
              <div key={index} className='card'>
                <div className='flex flex-col lg:flex-row space-y-4 justify-between py-2'>
                  <div className='flex flex-col space-y-2'>
                    <span className='font-bold text-2xl lg:text-3xl'>
                      {edu.level}
                    </span>
                    <span className='font-bold text-red-500 text-lg'>
                      {edu.school}
                    </span>
                  </div>
                  <div>
                    <span className='text-sm'>{edu.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Educations;
