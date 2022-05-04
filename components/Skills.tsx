import React from "react";

const skills = [
  "Web Development",
  "Mobile App Development",
  "Backend",
  "UI/UX Design",
  "Desktop Application Development",
];

const Skills = () => {
  return (
    <section className='section'>
      <div className='section-title'>Skills</div>
      <div className='section-body'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='skill'>
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
