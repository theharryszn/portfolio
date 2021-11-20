import { motion, useMotionValue, useViewportScroll, useDomEvent } from "framer-motion"
import React from "react";

const Artdirection = () => {
    const { scrollYProgress } = useViewportScroll();
    const art1 = useMotionValue(scrollYProgress.get());
    const art2 = useMotionValue(scrollYProgress.get());

    React.useEffect(() => {        
        scrollYProgress.onChange((v) => {
            art1.set(v * -window.innerWidth)
            art2.set(v * window.innerWidth)
        });
        
    }, [ scrollYProgress ])
    return (
        <div className="py-10 lg:py-32 text-6xl lg:text-8xl uppercase text-gray-600 font-bold flex flex-col space-y-4 lg:space-y-6">
            <span className="border-b w-full h-1 border-gray-600"></span>
            <span className="text-xs text-primary">{">_"} Web Developer</span>
            <motion.span
                style={{
                    width : "100%",
                    translateX : art1
                }}
            className="w-screen whitespace-nowrap art text-gray-600 hover:text-gray-300 transition-all duration-300">
                <motion.span className="ml-art1">I build quality, user-friendly websites</motion.span></motion.span>
            <motion.span  
                style={{
                    width : "100%",
                    translateX : art2
                }}
                className="w-screen whitespace-nowrap art text-gray-600 hover:text-gray-300 transition-all duration-300 ml-art2">I build cross-platform, scalable mobile apps.</motion.span>
            <span className="text-xs self-end text-primary">{">_"} Mobile App Developer</span>
            <span className="border-b w-full h-1 border-gray-600 "></span>
        </div>
    )
}

export default Artdirection
