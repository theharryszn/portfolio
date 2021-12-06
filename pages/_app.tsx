import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: -20, y: -20 });
  const [cursorScale, setCursorScale] = React.useState<"down" | "normal">("normal");


  const handleCursor = React.useCallback(() => {
    document.querySelectorAll(".cursor-scale-down").forEach(elem => {
      elem.addEventListener("mouseover", (e) => {
        setCursorScale("down");
      });

      elem.addEventListener("mouseout", () => {
        setCursorScale("normal");
      })
    })
  }, []);

  const cursorMoveHandler = React.useCallback(() => {
    window.addEventListener("mousemove",(e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    })
  },[])


  React.useEffect(() => {
    handleCursor();
    cursorMoveHandler();
  },[])

  const router = useRouter()

  return  <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <div className="text-white overflow-x-hidden">
              <div className="hidden lg:block rounded-full border-2 border-primary fixed z-50 transition-all duration-150" style={{
                top: position.y,
                left: position.x,
                width: cursorScale === "down" ? "1.25rem" : "2.5rem",
                height : cursorScale === "down" ? "1.25rem" : "2.5rem"
              }}></div>
              <Component {...pageProps} key={router.route}/>
            </div>
          </AnimatePresence>
}

export default MyApp
