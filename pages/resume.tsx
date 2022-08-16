import { NextPage } from "next";
import { CaretDown } from "phosphor-react";
import React from "react";
import Educations from "../components/Educations";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

export const languages = [
  {
    name: "English",
    level: "Intermediate",
  },
  {
    name: "Yoruba",
    level: "Native",
  },
  {
    name: "Spanish",
    level: "Beginner",
  },
];

export const awards = [
  {
    title: "Second Runner Up Techwiz Global Competition",
    date: "2021",
  },
];

const Resume: NextPage = () => {
  return (
    <main>
      <header className='header'>
        <div className='header-title'>
          <span className='ui-code-snippet'>{"<h1>"}</span>
          Résumé
          <span className='ui-code-snippet'>{"</h1>"}</span>
        </div>
        <div className='header-body'>
          <span className='ui-code-snippet'>{"<p>"}</span>
          <span className='mb-4 block font-bold'>PROFFESIONAL SUMMARY</span>
          <span>
            I&apos;m a Software Engineer from Nigeria 🇳🇬, I love building
            scalable solutions and applications that help people live better. I
            have advanced experience in tools like JavaScript, TypeScript ,Java,
            C#, Git, GitHub, Gitpod, Node and React Native. I&apos;m a
            Student-centered educator with solid background in post-secondary
            environments. Teaching students in Software Engineering from basic
            undergraduate to advanced courses. Well-versed in course planning,
            research oversight and student mentoring.
          </span>
          <span className='ui-code-snippet'>{"</p>"}</span>
        </div>
        <div
          className='scroll-btn'
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span>Scroll down</span>
          <CaretDown size={16} />
        </div>
      </header>
      <Skills />
      <Technologies />
      <Experiences />
      <Educations />
      <section className='section'>
        <div className='section-title'>Awards</div>
        <div className='section-body'>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
            {awards.map((awards, index) => {
              return (
                <div key={index} className='card'>
                  <div className='flex flex-col space-y-2'>
                    <span className='font-bold text-xl lg:text-2xl'>
                      {awards.title}
                    </span>
                    <span className='font-bold text-red-500 text-lg'>
                      {awards.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='section-title'>Languages</div>
        <div className='section-body'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {languages.map((language, index) => {
              return (
                <div key={index} className='card'>
                  <div className='flex flex-col space-y-2'>
                    <span className='font-bold text-xl lg:text-2xl'>
                      {language.name}
                    </span>
                    <span className='font-bold text-red-500 text-lg'>
                      {language.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
