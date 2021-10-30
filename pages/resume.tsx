import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Resumecard from '../components/resumecard'

const Resume : NextPage = () => {
    return (
        <div>
            <Head>
                <title>Resume - Software Engineer</title>
                <meta name="description" content="Portfolio Website For Abidemi Harry" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Navbar/>

            <main className="px-2 lg:px-40 mt-36">
                <Resumecard/>
                <Footer/>
            </main>
        </div>
    )
}

export default Resume
