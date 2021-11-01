import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useDomEvent } from 'framer-motion'
import { useRef, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [position, setPosition] = useState<{x : number, y : number}>({ x : -20, y : -20});

  const ref = useRef<HTMLDivElement>(null)
  
  useDomEvent(ref,"mousemove", (evt) => {
    const cevt = evt as unknown as { clientX: number, clientY : number }

    setPosition({ x: cevt.clientX, y : cevt.clientY})
    
  }, { passive: false })

  return <div ref={ref} className="bg-secondary text-white overflow-x-hidden">
    <div className="hidden lg:block rounded-full w-5 h-5 border-2 border-primary fixed" style={{
      top: position.y - 10,
      left: position.x - 10
    }}></div>
    <Component {...pageProps} />
  </div>
}

export default MyApp
