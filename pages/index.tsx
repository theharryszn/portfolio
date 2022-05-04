import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
// import FeaturedProjects from '../components/FeaturedProjects'
import Header from "../components/Header";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  const age = useState(new Date().getFullYear() - 2003)[0];
  return (
    <main>
      <Head>
        <title>Abidemi - Software Engineer</title>
        <meta
          name='description'
          content='Portfolio Website For Abidemi Harry'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://abidemiharry.vercel.app/' rel='canonical' />
        <meta name='theme-color' content='#10101A' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#FF2121' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Abidemi Harry 🚀 &mdash; Software Engineer'
        />
        <meta
          property='og:image'
          content='/assests/images/abidemi-harry-og.png'
        />
        <meta property='og:url' content='https://abidemiharry.vercel.app/' />
        <meta
          name='twitter:title'
          content='Abidemi Harry 🚀 &mdash; Software Engineer'
        />
        <meta
          name='twitter:description'
          content={`${age} y/o Nigerian Developer <br/>
          JavaScript and Typescript Enthusiasts <br/>
          Really love building high-quality apps and websites`}
        />
        <meta name='twitter:image' content='/assets/images/me.png' />
        <meta name='twitter:url' content='https://abidemiharry.vercel.app/' />
      </Head>
      <Header />
      {/* <FeaturedProjects/> */}
      <Skills />
    </main>
  );
};

export default Home;
