import { SpotifyLogo } from "phosphor-react";
import React from "react";

const Spotify = () => {
  return (
    <section className='section'>
      <div className='section-title'>
        <div className='flex space-x-3 items-center'>
          <SpotifyLogo size={30} /> <span>My Spotify</span>
        </div>
        <div className='text-left text-sm leading-loose my-2'>
          I love listening to music. and i&apos;m a big Spotify fan boy.
          Definetely one of my most used apps if not the most used 😎. Here are
          some of my playlists.
        </div>
      </div>
    </section>
  );
};

export default Spotify;
