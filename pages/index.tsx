import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Spotify from "../components/Spotify";
import Technologies from "../components/Technologies";

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
        <meta name='theme-color' content='0d0d0d' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#ef4444' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Abidemi Harry 🚀 &mdash; Software Engineer'
        />
        <meta
          property='og:image'
          content={`https://abidemiharry.vercel.app/assets/images/abidemi-harry-og.png`}
        />
        <meta property='og:url' content='https://abidemiharry.vercel.app/' />
        <meta
          name='twitter:title'
          content='Abidemi Harry 🚀 &mdash; Software Engineer'
        />
        <meta
          name='twitter:description'
          content={`${age} y/o Nigerian Developer ·
          JavaScript and Typescript Enthusiasts ·
          Really love building high-quality apps and websites`}
        />
        <meta
          name='twitter:image'
          content={`https://abidemiharry.vercel.app/assets/images/abidemi-harry-og.png`}
        />
        <meta name='twitter:url' content='https://abidemiharry.vercel.app/' />
      </Head>
      <Header />
      <Skills />
      <Technologies />
      <FeaturedProjects />
      <Spotify />
    </main>
  );
};

export default Home;
