import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useDomEvent, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react';
import { useRouter } from 'next/router'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [position, setPosition] = useState<{x : number, y : number}>({ x : -20, y : -20});

  const ref = useRef<HTMLDivElement>(null)
  
  useDomEvent(ref,"mousemove", (evt) => {
    const cevt = evt as unknown as { clientX: number, clientY : number }

    setPosition({ x: cevt.clientX, y : cevt.clientY})
    
  }, { passive: false })

  const router = useRouter()

  return  <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <div ref={ref} className="text-white overflow-x-hidden">
              <div className="hidden lg:block rounded-full w-5 h-5 border-2 border-primary fixed z-50" style={{
                top: position.y - 10,
                left: position.x - 10
              }}></div>
              <Component {...pageProps} key={router.route}/>
            </div>
          </AnimatePresence>
}

export default MyApp
