import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { scrollToView } from "../utils/scroll"
import Navbar from "./navbar"

const Header = () => {
    const age = useState(new Date().getFullYear() - 2003)[0]

    return (
        <header className="w-screen h-80p lg:h-screen flex justify-start items-center relative">
        <Navbar/>
        <div className="flex flex-col space-y-4 px-10 lg:px-40 relative">
          <div className="flex items-center space-x-1 font-bold uppercase tracking-wide text-sm pl-2"><span>Hi There </span><Image src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="20" height="16" alt="emoji"/>, I'm</div>
          <div className="text-5xl font-bold relative text-video h-12">
              <video loop autoPlay muted playsInline className="absolute h-full top-0 w-full object-cover transform scale-y-95">
                <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4"/>
              </video>
              <span className="absolute top-0 name h-full w-full flex items-center justify-start">Abidemi.</span>
          </div>
          <div className="text-lg text-primary font-bold tracking-wide">Software Engineer</div>
          <div className="text-sm text-gray-400 max-w-md">
            {age} y/o Nigerian Developer <br/>
            JavaScript and Typescript Enthusiasts <br/>
            Really love building high-quality apps and websites
          </div>
          <p className="font-semibold text-gray-400">Mobile Developer - Fullstack Developer</p>
          <div>
            <button className="px-10 uppercase tracking-wide text-sm py-3 bg-primary rounded-lg hover:bg-opacity-75 transition-all duration-300" onClick={() : void => scrollToView("contact")}>Hire Me</button>
          </div>
        </div>
          <div className="hidden absolute bottom-0 right-0 z-50 mx-20 lg:mx-40 my-20 w-64 transition-all duration-300 cursor-pointer lg:flex flex-col items-center justify-end space-y-2">
            <div className="flex items-center space-x-4 justify-between w-full animate-pulse ">
              <span className="text-gray-400 font-semibold text-sm" onClick={() : void => scrollToView("about")}>Scroll  Down </span>
              <svg className="w-6 h-6 animate-load" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
      </header>
    )
}

export default Header
