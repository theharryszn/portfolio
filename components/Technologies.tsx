import React from "react";

const technologies = [
  {
    name: "TypeScript",
  },
  {
    name: "JavaScript",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Sass",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express",
  },
  {
    name: "GraphQL",
  },
  {
    name: "MongoDB",
  },
  {
    name: "React Native",
  },
  {
    name: "Android",
  },
  {
    name: "Jetpack Compose",
  },
  {
    name: "Swift",
  },
  {
    name: "SwiftUI",
  },
  {
    name: "Java",
  },
  {
    name: "Kotlin",
  },
  {
    name: "Solidity",
  },
  {
    name: "Expo",
  },
  {
    name: "Figma",
  },
  {
    name: "ethers.js",
  },
  {
    name: "Hardhat",
  },
  {
    name: "Python",
  },
  {
    name: "Firebase",
  },
  {
    name: "Framer Motion",
  },
];

const Technologies = () => {
  return (
    <section className='section '>
      <div className='section-title'>
        Technologies
        <div className='text-left text-sm'>
          The list of technologies i&apos;ve learnt and worked with.
        </div>
      </div>
      <div className='section-body'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {technologies.map((technology, index) => {
            return (
              <div key={index} className='technology'>
                <span className='text-base'>{technology.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
