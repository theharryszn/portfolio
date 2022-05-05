import { CaretDown } from "phosphor-react";
import React from "react";

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
        <div className='section-title'>Artworks</div>
        <div className='section-body'>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
            {/* {awards.map((awards, index) => {
              return (
                <div key={index} className='card'>
                  <div className='flex flex-col space-y-2'>
                    <span className='font-bold text-xl lg:text-2xl'>
                      {awards.title}
                    </span>
                    <span className='font-bold text-red-500 text-lg'>
                      {awards.date}
                    </span>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Art;
