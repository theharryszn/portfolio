import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/aboutme'
import Artdirection from '../components/artdirection'
import Contact from '../components/contact'
import FeaturedProjects from '../components/featuredProjects'
import Footer from '../components/footer'
import Header from '../components/header'

const Home: NextPage = () => {

  return (
    <div className="relative">
      <Head>
        <title>Abidemi - Software Engineer</title>
        <meta name="description" content="Portfolio Website For Abidemi Harry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative hidden lg:block">
        <div className="flex flex-col space-y-6 items-center justify-end h-screen fixed bottom-0 left-0 z-50 px-5 lg:px-10">
          <span className="hover:text-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <svg className="feather feather-github" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </span>
          <span className="hover:text-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <svg className="feather feather-instagram" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </span>
          <span className="hover:text-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <svg className="feather feather-twitter" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </span>
          <span className="hover:text-primary transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <svg className="feather feather-linkedin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </span>
          <span className="border-l w-1 h-36 border-white"></span>
        </div>
        <div className="h-screen fixed bottom-0 right-0 z-50 px-5 lg:px-10 transition-all duration-300 cursor-pointer flex flex-col items-center justify-end space-y-2">
          <span className="font-semibold tracking-wide text-sm hover:text-primary header-email-text transform transition-all duration-300 hover:-translate-y-2">opeabidemi@gmail.com</span>
          <span className="border-l w-1 h-36 border-white"></span>
        </div>
      </div>
      
      <Header/>

      <main className="px-2 lg:px-40">
          <AboutMe/>
          <Artdirection/>
          <FeaturedProjects/>
          <Contact/>
          <Footer/>
      </main>
    </div>
  )
}

export default Home
