import { SpotifyLogo } from "phosphor-react";
import React from "react";

export const playlists = [
  {
    title: "[ into the deep void]",
    description: "",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0Wae37jp7vZqmhXFFRGuHU?utm_source=generator",
  },
  {
    title: "waGwan",
    description: "",
    embedUrl:
      "https://open.spotify.com/embed/playlist/4XBb6KAyxSpP4UWbvdTsEb?utm_source=generator",
  },
];

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
          some of my favorite playlists.
        </div>
      </div>
      <div className='section-body'>
        <div className='grid grid-cols-2 gap-10'>
          {playlists.map((playlist, index) => (
            <div key={index}>
              <iframe
                style={{
                  borderRadius: "12px",
                }}
                src={playlist.embedUrl + "&theme=0"}
                width='100%'
                height='380'
                frameBorder='0'
                allowFullScreen
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotify;
