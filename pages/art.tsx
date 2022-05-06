/* eslint-disable @next/next/no-img-element */
import { CaretDown } from "phosphor-react";
import React from "react";

export const artworks = [
  {
    title: "Scared Scumbag",
    description: "Painted a line art i found on Pinterest. Artist is unknown",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/1.png",
  },
  {
    title: "Dimension Logo",
    description: "Just a quick logo design concept",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/2.png",
  },
  {
    title: "Batia",
    description:
      "Character design for comic book concept. Mostly used to represent me",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/3.png",
  },
  {
    title: "Swift",
    description: "Logo design concept",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/4.png",
  },
  {
    title: "Skuba",
    description: "Character design for comic book concept",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/5.png",
  },
  {
    title: "Runi",
    description: "Character design for comic book concept",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/6.png",
  },
  {
    title: "Untitled Artwork",
    description:
      "Added colors to sketch i found on Pinterest. Artist is unknown ",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/7.png",
  },
  {
    title: "Baddie",
    description: "Painting of fierce lady",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/8.png",
  },
  {
    title: "Cupid",
    description: "Logo concept design",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/9.png",
  },
  {
    title: "Untitled Artwork",
    description: "Painting of sketch by Cameron Mark",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/10.png",
  },
  {
    title: "Untitled Artwork",
    description: "Painting of sketch by Cameron Mark",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/11.png",
  },
  {
    title: "Laura",
    description: "Painting of scene from His Dark Materials",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/12.png",
  },
  // {
  //   title: "Ojuju Cover Art",
  //   description:
  //     "A cover art painting for African Comic Book. Sketch by Marcel",
  //   software: "Medibang Paint Pro",
  //   src: "/assets/images/artworks/13.png",
  // },
  {
    title: "Bathhub",
    description: "Logo Concept Design",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/14.png",
  },
  {
    title: "Pure Bees",
    description: "Commisioned Logo Design for a Honey Production Company",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/15.png",
  },
  {
    title: "Groot",
    description: "Baby Groot Concept Design",
    software: "Medibang Paint Pro",
    src: "/assets/images/artworks/16.png",
  },
];

const Art = () => {
  return (
    <main>
      <header className='header'>
        <div className='header-title'>
          <span className='ui-code-snippet'>{"<h1>"}</span>
          Where code meets art and creativity.
          <span className='ui-code-snippet'>{"</h1>"}</span>
        </div>
        <div className='header-body'>
          <span className='ui-code-snippet'>{"<p>"}</span>
          <span className='mb-4 block font-bold'>
            WHAT ELSE DON&apos;T YOU KNOW?
          </span>
          <span>
            I&apos;m also a digital artist, I love to create art and painting. I
            have experience with softwares like Adobe Photoshop, Illustrator,
            Procreate, Medibang Paint Pro.
          </span>
          <span className='ui-code-snippet'>{"</p>"}</span>
        </div>
        <div
          className='scroll-btn'
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span>Scroll down</span>
          <CaretDown size={16} />
        </div>
      </header>
      <section className='section'>
        <div className='section-title text-center'>
          <span>Artworks</span>
        </div>
        <div className='section-body min-w-[100vw] lg:min-w-[100vw]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 px-2'>
            {artworks.map((artwork, index) => (
              <div
                key={index}
                className='h-[40rem] relative cursor-pointer group overflow-hidden'
              >
                <div className='absolute top-0 z-10 w-full h-full hover:bg-red-900/70 flex items-center justify-center'>
                  <div className='flex flex-col space-y-2 px-10 opacity-0 group-hover:opacity-100 transition'>
                    <span className='text-xl'>{artwork.title}</span>
                    <span>{artwork.description}</span>
                    <span className='text-sm'>{artwork.software}</span>
                  </div>
                </div>
                <img
                  src={artwork.src}
                  alt='artwork'
                  className='h-full transform group-hover:scale-105 w-full object-cover cursor-pointer transition'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Art;
