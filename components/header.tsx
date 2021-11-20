import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useViewportScroll } from 'framer-motion'
import { scrollToView } from "../utils/scroll"
import Navbar from "./navbar"

const Header = () => {
    const age = useState(new Date().getFullYear() - 2003)[0]
    const { scrollYProgress } = useViewportScroll();
    const pathLength = useMotionValue(0);

    const ref = useRef<HTMLSpanElement>(null)

    return (
        <header className="w-screen h-80p lg:h-screen flex justify-start items-center relative">
        <motion.svg className="absolute top-0 right-0 lg:mr-48 transform translate-x-96 lg:translate-x-0" width="472" height="619" viewBox="0 0 472 619" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            animate={{ pathLength: 10 }}
            style={{ pathLength, strokeWidth : 4 }}
            transition={{ duration : 10 }}
            d="M5 0V369C5 406.003 34.9969 436 72 436V436C109.003 436 139 406.003 139 369V0" stroke="#FF2121"/>
        <motion.path
            animate={{ pathLength: 10 }}
            style={{ pathLength, strokeWidth : 4 }}
            transition={{ duration : 10 }}
            d="M169 0V547C169 584.003 198.997 614 236 614V614C273.003 614 303 584.003 303 547V0" stroke="#FF2121"/>
        <motion.path
            animate={{ pathLength: 2 }}
            style={{ pathLength, strokeWidth : 4 }}
            transition={{ duration : 2 }}
            d="M333 0V421C333 458.003 362.997 488 400 488V488C437.003 488 467 458.003 467 421V0" stroke="#FF2121"/>
        </motion.svg>
        <Navbar/>
        <div className="flex flex-col space-y-4 px-10 lg:px-40 relative">
          <div className="flex items-center space-x-1 font-bold uppercase tracking-wide text-sm pl-2"><span>Hi There </span><Image src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="20" height="16" alt="emoji"/>, I'm</div>
          <div className="text-5xl font-bold relative hero-text h-12">
              Abidemi.
          </div>
          <div className="text-lg text-primary font-bold tracking-wide">Software Engineer</div>
          <div className="text-sm text-gray-300 max-w-md font-medium">
            {age} y/o Nigerian Developer <br/>
            JavaScript and Typescript Enthusiasts <br/>
            Really love building high-quality apps and websites
          </div>
          <p className="font-semibold text-gray-300">Mobile Developer - Fullstack Developer</p>
          <div>
            <button className="px-10 uppercase tracking-wide text-sm py-3 bg-primary rounded-lg hover:bg-opacity-75 transition-all duration-300" onClick={() : void => scrollToView("contact")}>Hire Me</button>
          </div>
        </div>
          <div className="hidden absolute bottom-0 right-0 z-40 mx-20 lg:mx-40 my-16 w-64 transition-all duration-300 cursor-pointer lg:flex flex-col items-center justify-end space-y-2">
            <div className="flex items-center space-x-4 justify-between w-full animate-pulse "  onClick={() : void => scrollToView("about")}>
              <span className="text-gray-300 font-semibold text-sm">Scroll  Down </span>
              <svg className="w-6 h-6 animate-load" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
      </header>
    )
}

export default Header
