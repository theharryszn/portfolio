import {
  AndroidLogo,
  AppleLogo,
  AppWindow,
  Browser,
  Cloud,
  Database,
  FigmaLogo,
  Globe,
  Layout,
  WindowsLogo,
} from "phosphor-react";
import React from "react";

export const skills = [
  {
    name: "Web Development",
    icons: [{ icon: Globe }, { icon: Browser }],
  },
  {
    name: "Mobile App Development",
    icons: [{ icon: AppleLogo }, { icon: AndroidLogo }],
  },
  { name: "Backend", icons: [{ icon: Database }, { icon: Cloud }] },
  { name: "UI/UX Design", icons: [{ icon: FigmaLogo }, { icon: Layout }] },
  {
    name: "Desktop Application Development",
    icons: [{ icon: AppWindow }, { icon: WindowsLogo }, { icon: AppleLogo }],
  },
];

const Skills = () => {
  return (
    <section className='section '>
      <div className='section-title'>Skills</div>
      <div className='section-body'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='card'>
                <div className='flex flex-row space-x-2 py-4'>
                  {skill.icons.map((icon, index) => {
                    return <icon.icon key={index} size={20} />;
                  })}
                </div>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
