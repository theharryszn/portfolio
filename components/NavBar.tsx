import { NextPage } from "next";
import Link from "next/link";
import { List } from "phosphor-react";
import React from "react";

const NavBar: NextPage = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <span className='navbar-title'>abidemi</span>
      </Link>
      <div className='navbar-links'>
        <Link href='/resume'>
          <span className='link'>Resume</span>
        </Link>
        <Link href='/projects'>
          <span className='link'>Projects</span>
        </Link>
        <Link href='/art'>
          <span className='link'>Art Gallery</span>
        </Link>
        <Link href='/nfts'>
          <span className='link'>NFTs</span>
        </Link>
        <Link href='/blog'>
          <span className='link'>Blog</span>
        </Link>
      </div>
      <div className='menu'>
        <List size={20} />
      </div>
    </nav>
  );
};

export default NavBar;
