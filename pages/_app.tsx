import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="bg-secondary text-white overflow-x-hidden">
    <Component {...pageProps} />
  </div>
}

export default MyApp
