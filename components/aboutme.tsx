import { technologies, tools } from "./resumecard";

const AboutMe = () => {
    return (
        <div className="py-10" id="about">
          <p className="flex items-center space-x-4 px-6 font-bold tracking-wide text-gray-600">
            <span className="text-xs">About Me </span>
            <span className="border-b w-36 h-1 border-gray-600"></span>
          </p>
          <div className="px-6 font-semibold text-gray-400 py-3">
            <h3 className="text-4xl font-bold mb-10"><span className="text-primary text-opacity-70">{">_"}</span> whoami 😁</h3>
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
        </div>
    )
}

export default AboutMe;