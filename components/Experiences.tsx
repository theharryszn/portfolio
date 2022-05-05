import React from "react";

export type Experience = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  tasks: string[];
};

export const experiences: Experience[] = [
  {
    position: "Web Development Tutor",
    company: "Capriquota Technologies",
    startDate: "March 2021",
    endDate: "August 2021",
    tasks: [
      "Taught Web Development and Web Technologies like HTML,CSS and JavaScript",
      "Leveraged video calls, online chats, and email to tutor students remotely.",
      "Coordinated lesson plans, course materials, and discussion questions to prepare for the session.",
      "Helped students develop critical thinking experiences and strong study habits to improve grades.",
      "Reviewed classworks and assisted with homework to boost student understanding of assignments.",
    ],
  },
  {
    position: "Faculty Member - Intern",
    company: "Aptech Computer Education",
    startDate: "August 2021",
    endDate: "October 2021",
    tasks: [
      "Planned and implemented instructional programs in line with system-wide goals and priorities to meet student needs.",
      "Delivered instruction on critical and computational thinking, digital citizenship, and technology literacy.",
      "Taught strategies to use advantages of technology for research and homework completion.",
      "Taught students the basics of computer science, hardware configuration and entry-level coding.",
      "Delivered presentations and lectures on topics related to C# Programming and Android.",
      "Instructed students in programming language applications, including Kotlin and Java.",
    ],
  },
  {
    position: "Senior Faculty Member",
    company: "Aptech Computer Education",
    startDate: "October 2021",
    endDate: "Present",
    tasks: [
      "Assessed students' progress by grading assignments, papers, and exams.",
      "Oversaw basic and advanced laboratory activities in Android Development and Web Development.",
      "Helped senior students explore deep concepts in Agile Development.",
      "Mentored students completing research into topics.",
      "Promoted learning-focused environment encouraging student participation and involvement.",
      "Taught over 30 students per semester in advanced coursework.",
    ],
  },
];

const Experiences = () => {
  return (
    <section className='section '>
      <div className='section-title'>Experiences</div>
      <div className='section-body'>
        <div className='grid grid-cols-1 gap-10'>
          {experiences.map((experience, index) => {
            return (
              <div key={index} className='card'>
                <div className='flex flex-col lg:flex-row space-y-4 justify-between py-2'>
                  <div className='flex flex-col space-y-2'>
                    <span className='font-bold text-2xl lg:text-3xl'>
                      {experience.position}
                    </span>
                    <span className='font-bold text-red-500 text-lg'>
                      {experience.company}
                    </span>
                  </div>
                  <div>
                    <span className='text-sm'>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                </div>
                <div className='flex flex-col space-y-4 py-2'>
                  {experience.tasks.map((task, index) => {
                    return (
                      <div key={index} className='text-base'>
                        <span>- </span>
                        <span>{task}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
