import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="bg-gray-900 h-screen w-screen text-white">
    <Component {...pageProps} />
  </div>
}

export default MyApp
