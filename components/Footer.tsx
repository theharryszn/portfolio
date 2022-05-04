import { Envelope } from "phosphor-react";
import React from "react";
import { socials } from "./Header";

const Footer = () => {
  return (
    <footer className='footer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-full w-screen'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#050505'
          fillOpacity='1'
          d='M0,224L0,288L720,288L720,256L1440,256L1440,320L720,320L720,320L0,320L0,320Z'
        ></path>
      </svg>
      <div>
        <div className='footer-title'>Interested to work with me?</div>
        <div className='footer-body'>
          I’m currently looking to join a team of creative designers and
          developers.
          <br />
          <div>
            <a href='mailto:opeabidemi@gmail.com' className='mail-btn'>
              <Envelope size={22} />
              <span>Send me an e-mail</span>
            </a>
          </div>
          <div className='text-sm text-gray-500 mt-10'>Follow me</div>
          <div className='footer-socials'>
            {socials.map((handle, index) => {
              return (
                <a
                  href={handle.url}
                  target='_blank'
                  title={handle.name}
                  key={index}
                  className='footer-socials-item'
                  rel='noreferrer'
                >
                  {handle.icon && <handle.icon size={24} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className='copyright'>
        &copy; {new Date().getFullYear()} Abidemi Ope. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
