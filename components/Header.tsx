import React from "react";
import {
  CaretDown,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  SpotifyLogo,
  TwitterLogo,
} from "phosphor-react";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/OpeAbidemi",
    icon: GithubLogo,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ope_abidemi",
    icon: TwitterLogo,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/abidemi-ope-1ba99019a",
    icon: LinkedinLogo,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/harry_ope/",
    icon: InstagramLogo,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31br6djiz7oburebyiscmbr4lqny?si=pDZoFHs_TKWDvWG3Ro1M0A",
    icon: SpotifyLogo,
  },
];

const Header = () => {
  return (
    <header className='header'>
      <div className='header-title'>
        <span className='ui-code-snippet'>{"<h1>"}</span>
        {new Date().getFullYear() - 2003}y/o Software Engineer creating
        intuitive and user-friendly experiences.
        <span className='ui-code-snippet'>{"</h1>"}</span>
      </div>
      <div className='header-body'>
        <span className='ui-code-snippet'>{"<p>"}</span>
        Hi There, <span className='text-red-500'>I&apos;m Abidemi</span>
        <br />
        A software engineer based in Nigeria 🇳🇬
        <br />
        I&apos;m a self-taught developer with a passion for creating intuitive
        and user-friendly experiences. <br />
        I specialise in building fullstack web applications and mobile
        applications with a focus on usabilty and simplicity. <br />
        <span className='ui-code-snippet'>{"</p>"}</span>
        <div className='header-socials'>
          {socials.map((handle, index) => {
            return (
              <a
                href={handle.url}
                target='_blank'
                title={handle.name}
                key={index}
                className='header-socials-item'
                rel='noreferrer'
              >
                {handle.icon && <handle.icon size={24} />}
              </a>
            );
          })}
        </div>
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
  );
};

export default Header;
