import { NextPage } from "next";
import Link from "next/link";
import { Equals, X } from "phosphor-react";
import React from "react";
import { motion } from "framer-motion";
import { socials } from "./Header";
import { useRouter } from "next/router";

const links = [
  {
    name: "Resume",
    url: "/resume",
  },
  // {
  //   name: "Projects",
  //   url: "/projects",
  // },
  {
    name: "Art Gallery",
    url: "/art",
  },
  {
    name: "NFTs",
    url: "/nfts",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const NavBar: NextPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { pathname } = useRouter();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  return (
    <nav className='navbar'>
      <Link href='/'>
        <span className='navbar-title cursor-pointer'>abidemi</span>
      </Link>
      <div className='navbar-links'>
        {links.map((link, key) => (
          <Link href={link.url} key={key}>
            <span className='link'>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className='menu' onClick={() => setIsMobileMenuOpen(true)}>
        <Equals size={20} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
          y: isMobileMenuOpen ? 0 : "-100%",
          borderRadius: isMobileMenuOpen ? "0px" : "100%",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className='mobile-menu space-y-4'
      >
        <div className='absolute top-0 w-full flex items-center justify-between py-4 px-10'>
          <Link href='/'>
            <span className='navbar-title'>abidemi</span>
          </Link>
          <div className='p-2' onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </div>
        </div>
        <div className='flex flex-col space-y-10 items-center text-xl'>
          {links.map((link, key) => (
            <Link href={link.url} key={key}>
              <span className='link'>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className='flex items-center space-x-2 py-16'>
          {socials.map((handle, index) => {
            return (
              <a
                href={handle.url}
                target='_blank'
                title={handle.name}
                key={index}
                className='p-2 hover:bg-red-900/20 rounded-full'
                rel='noreferrer'
              >
                {handle.icon && <handle.icon size={24} />}
              </a>
            );
          })}
        </div>
        <div>
          <div className='copyright'>
            <span>
              &copy; {new Date().getFullYear()} Abidemi Ope. All Rights
              Reserved.
            </span>
            <span>Built with NextJS and TailwindCSS.</span>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
