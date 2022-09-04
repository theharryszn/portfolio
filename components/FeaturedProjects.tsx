/* eslint-disable @next/next/no-img-element */
import { GithubLogo, ArrowSquareOut } from "phosphor-react";
import React from "react";

export const featured_projects = [
  {
    title: "Stickies",
    description:
      "Stickies is a simple note-taking web-app built with Vue and TailwindCSS. It allows you to pin sticky notes at random on a board. It harness the browsers Local Storage for storing notes.",
    url: "https://stickies-app.vercel.app",
    image: "/assets/images/screenshots/stickies.png",
    repository: "https://github.com/OpeAbidemi/stickies",
    team: {
      name: "Abidemi Ope",
      url: "https://github.com/OpeAbidemi",
    },
  },
  {
    title: "Beatfro",
    description: "A music streaming app",
    url: "http://beatfrowaitlist.netlify.app/",
    image: "/assets/images/screenshots/beatfro.png",
    repository: null,
    team: {
      name: "Renli Tech",
      url: "https://github.com/renli-tech",
    },
  },
  {
    title: "ON-OS",
    description: "A web based open source operating system",
    url: "https://on-os.vercel.app/",
    image: "/assets/images/screenshots/onos.png",
    repository: "https://github.com/asterix-oss/on-os",
    team: {
      name: "Asterix",
      url: "https://github.com/asterix-oss",
    },
  },
  {
    title: "darkchill",
    description: "A very chill dark theme for VS Code",
    url: "https://marketplace.visualstudio.com/items?itemName=AbidemiOpe.darkchill&ssr=false#overview",
    image: "/assets/images/screenshots/darkchill.png",
    repository: "https://github.com/OpeAbidemi/darkchill",
    team: {
      name: "Abidemi Ope",
      url: "https://github.com/OpeAbidemi",
    },
  },
  {
    title: "Beyond",
    description: "A React component library based on Renli Design System",
    url: "https://www.npmjs.com/package/@beyond-ui/react",
    image: "/assets/images/screenshots/beyond.png",
    repository: "https://github.com/renli-tech/Beyond",
    team: {
      name: "Renli Tech",
      url: "https://github.com/renli-tech",
    },
  },
  {
    title: "Olimf Productions",
    description: "Website for Media Agency",
    url: "https://www.olimf.com/",
    image: "/assets/images/screenshots/olimf.png",
    repository: null,
    team: {
      name: "Abidemi Ope",
      url: "https://github.com/OpeAbidemi",
    },
  },
  {
    title: "hamburger",
    description:
      "A yummy fullstack monorepo boilerplate 🍔🍔 using Typescript, GraphQL, React and React Native (Expo)",
    url: "https://github.com/renli-tech/hamburger",
    image: "/assets/images/screenshots/hamburger.png",
    repository: "https://github.com/renli-tech/hamburger",
    team: {
      name: "Renli Tech",
      url: "https://github.com/renli-tech",
    },
  },
];

const FeaturedProjects = () => {
  return (
    <section className='section'>
      <div className='section-title'>
        Featured Projects
        <div className='text-left text-sm'>
          Here are some of the projects i&apos;ve worked on personally or as a
          team leader.
        </div>
      </div>

      <div className='projects'>
        {featured_projects.map((project) => (
          <div className='project-card' key={project.title}>
            <img
              className='project-card-image'
              src={project.image}
              alt={project.title}
            />
            <div className='project-card-body'>
              <div className='project-card-title'>
                <a target='_blank' href={project.url} rel='noreferrer'>
                  <span>{project.title}</span>
                  <ArrowSquareOut />
                </a>
              </div>
              <div className='project-card-description'>
                <p className='text-xs text-gray-400 mb-2'>Description:</p>
                {project.description}
              </div>
              {/* <div className='project-card-team'>
                <a target='_blank' href={project.team.url} rel='noreferrer'>
                  Developed as <span className='team'>{project.team.name}</span>
                </a>
              </div> */}
              {project.repository && (
                <div className='project-card-repository'>
                  <a target='_blank' href={project.repository} rel='noreferrer'>
                    <GithubLogo size={18} />
                    <span>View On Github</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
