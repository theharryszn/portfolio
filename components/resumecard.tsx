import React from 'react'

const technologies = ["JavaScript","TypeScript","Java","TailwindCSS","Kotlin","GraphQL","React","Next.JS","React Native", "SCSS", "Spring Boot","Android","NodeJS", "Electron", "TypeGraphQL", "ExpressJS", "Python"]
const languages = ["English", "Yoruba"];
const tools = ["Git","GitHub","Gitpod","Node", "Expo", "TypeORM"]

type Experience = {
    startDate : string,
    endDate: string,
    position : string,
    company : string,
    description : string,
    location : string
}

const experiences : Experience[] = [
    {
        startDate : "03/2021",
        endDate : "09/2021",
        position : "Web Development Tutor",
        company : "Capriquota Technologies",
        location: "Abeokuta, Nigeria",
        description : "Tutoring Computer Science SIWES students the basics of web development and preparing for the tech community."
    }
]

const Resumecard = () => {
    return (
        <div className="p-6 lg:p-12 grid grid-cols-12 resume-card w-full my-6 gap-x-4">
            <div className="col-span-4 flex flex-col space-y-4">
                <div className="text-sm text-primary font-semibold">
                    <p>abidemi-harry.netlify.app</p>
                    <p>Ogun State, Nigeria</p>
                    <a href="mailto:opeabidemi@gmail.com">opeabidemi@gmail.com</a>
                </div>
                <div>
                    <p className="font-semibold text-lg">Technologies</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                technologies.map(tech => <li>{tech}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Tools</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                tools.map(tool => <li>{tool}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Languages</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                languages.map(lang => <li>{lang}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-8">
                <p className="text-3xl lg:text-5xl font-bold">Abidemi</p>
                <p className="text-xl font-semibold text-primary">Software Engineer</p>
                <p className="py-6">
                    Hi, I'm Abidemi
                    <p>
                        I'm a Software Engineer from Nigeria, I love building scalable solutions and applications that help people live better. 
                    </p>
                    <p>I build user-friendly websites and cross-platform mobile-applications</p>
                </p>
                <span className="border-b w-full h-1 border-gray-400"></span>
                <div className="py-4">
                    <p className="text-primary font-bold text-xl">Experience</p>
                    <div>
                        {
                            experiences.map(exp => {
                                return (
                                    <div className="py-4 px-3">
                                        <p className="text-primary font-semibold text-sm uppercase">{exp.startDate}-{exp.endDate} {exp.location}</p>
                                        <p className="capitalize text-xl text-gray-200 font-bold">{exp.position}</p>
                                        <p className="text-primary font-semibold text-sm">{exp.company}</p>
                                        <p className="py-2">{exp.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-primary font-bold text-xl">Projects</p>
                </div>
            </div>
        </div>
    )
}

export default Resumecard
