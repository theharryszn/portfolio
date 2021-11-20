import { technologies, tools } from "./resumecard";
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className="py-10 lg:py-32" id="about">
          <p className="flex items-center space-x-4 px-6 font-bold tracking-wide text-gray-600">
            <span className="text-xs">About Me </span>
            <span className="border-b w-36 h-1 border-gray-600"></span>
          </p>
          <div className="grid grid-cols-3 grid-flow-col-dense items-center">
            <div className="col-span-full lg:col-span-2 px-6 font-semibold text-gray-300 py-3">
              <h3 className="text-5xl font-bold mb-20"><span className="text-primary text-opacity-70">{">_"}</span> <span className="heading-text">whoami</span> 😁</h3>
              <p>
                Hello! My name is Abidemi and I love building high-quality apps and websites.
              </p>
              <p className="mt-2">
                I'm a Software Engineer from Nigeria, I love building scalable solutions and applications that help people live better.
              </p>
              <div>
                <p className="mt-2 font-bold">
                  Some tools I have been working with recently:
                </p>
                <div>
                  <ul className="grid grid-cols-2 py-3 list-inside tools-list">
                    {
                      technologies.slice(0,4).concat(...tools.slice(0,4)).map((tool,i) => {
                        return <li key={i}>{tool}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full col-span-full lg:col-span-1 flex items-center lg:justify-center px-4">
              <svg className="w-16 lg:w-64 h-16 lg:h-64 border-primary border-2 cursor-pointer rounded-full p-1 lg:p-2" xmlns="http://www.w3.org/2000/svg">
                 <image href="/assets/images/me.png" height="100%" width="100%"/>
              </svg>
              <div className="px-3 lg:hidden">
                <p className="font-bold text-gray-50">Abidemi Harry</p>
                <p className="text-gray-300 text-sm">Software Developer</p>
              </div>
            </div>

          </div>
        </div>
    )
}

export default AboutMe;