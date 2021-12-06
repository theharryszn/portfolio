import React from 'react'

export const technologies = ["JavaScript","TypeScript","Java","C#","TailwindCSS","Kotlin","GraphQL","React","Next.JS","React Native", "SCSS", "Spring Boot","Android","NodeJS", "Electron", "TypeGraphQL", "ExpressJS", "Python"]
export const languages = ["English", "Yoruba"];
export const tools = ["Git","GitHub","Gitpod","Node", "Expo", "TypeORM"]

type Experience = {
    startDate : string,
    endDate: string,
    position : string,
    company : string,
    description : string,
}

const Resumecard = () => {

    const  experiences = React.useState<Array<Experience>>([
        {
            startDate : "March",
            endDate : "August 2021",
            position : "Web Development Tutor",
            company : "Capriquota Technologies",
            description : "Tutoring Computer Science SIWES students the basics of web development and preparing for the tech community."
        },
        {
            startDate : "August",
            endDate : "September 2021",
            position : "C# and Java Faculty - Intern",
            company : "Aptech Computer Education",
            description : "Teaching advanced C# and Java"
        },
        {
            startDate : "October",
            endDate : "Present",
            position : "Android Faculty",
            company : "Aptech Computer Education",
            description : "Teaching from basics to advanced Android App Development with Kotlin"
        },
    ])[0];

    return (
        <div className="p-6 lg:p-12 grid grid-cols-12 resume-card w-full my-6 gap-x-4 text-sm">
            <div className="hidden col-span-4 lg:flex flex-col space-y-4">
                <div className="text-primary font-semibold">
                    <p>abidemi-harry.netlify.app</p>
                    <p>Ogun State, Nigeria</p>
                    <a href="mailto:opeabidemi@gmail.com">opeabidemi@gmail.com</a>
                </div>
                <div>
                    <p className="font-semibold text-lg">Technologies</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                technologies.map((tech, i) => <li key={i}>{tech}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Tools</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                tools.map((tool,i) => <li key={i}>{tool}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-lg">Languages</p>
                    <div className="ml-6">
                        <ul className="list-disc py-2">
                            {
                                languages.map((lang,i) => <li key={i}>{lang}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-full lg:col-span-8">
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
                <div className="py-2">
                    <p className="text-primary font-bold text-xl">Experience</p>
                    <div>
                        {
                            experiences.reverse().map((exp,i) => {
                                return (
                                    <div className="py-4 px-3" key={i}>
                                        <p className="text-primary font-semibold text-sm uppercase">{exp.startDate} - {exp.endDate}</p>
                                        <p className="capitalize text-xl text-gray-200 font-bold">{exp.position}</p>
                                        <p className="text-primary font-semibold text-sm">@ {exp.company}</p>
                                        <p className="py-2">{exp.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="py-2">
                    <p className="text-primary font-bold text-xl">Projects</p>
                </div> */}
            </div>
        </div>
    )
}

export default Resumecard
