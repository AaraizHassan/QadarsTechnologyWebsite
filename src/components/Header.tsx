'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import Image from 'next/image';
import logoimage from '../app/Qadars Technology Logo.png';
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 
      ${isScrolled ? "bg-[#1E40AF]/95 backdrop-blur-md shadow-md" : "bg-[#1E40AF]"} 
      text-white`}
    >
      <Container className="!px-0">
        {/* <nav className="mx-auto flex justify-between items-center py-4 px-1 md:py-4"> */}
        <nav className="mx-auto flex items-center justify-start gap-6 py-4 px-4 md:py-4">


          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-auto">
            <Image
              src={logoimage}
              alt="Qadars Technology Logo"
              width={70}
              height={70}
              className="md:w-[100px] md:h-[100]"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 ml-auto mr-4">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white hover:text-[#93C5FD] transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact / CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="#contactus"
              className="bg-[#2563EB] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1D4ED8] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoimage}
              alt="Qadars Technology Logo"
              width={70}
              height={70}
              className="md:w-[100px] md:h-[100]"
            /> */}
            {/* <span
              className={`${orbitron.className} text-xs sm:text-lg md:text-3xl lg:text-4xl font-semibold cursor-pointer`}
            >
              {siteDetails.siteName}
            </span> */}
          {/* </Link> */}

          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white hover:text-[#93C5FD] transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul> */}
          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center justify-between w-full px-10">
            
            {/* <ul className="flex space-x-6">
              {menuItems
                .filter((item) => item.text === "Tech Stack")
                .map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="text-white hover:text-[#93C5FD] transition-colors font-medium"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex space-x-6">
              {menuItems
                .filter((item) => item.text !== "Tech Stack")
                .map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="text-white hover:text-[#93C5FD] transition-colors font-medium"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}


          {/* Contact / CTA Button */}
          {/* <div className="hidden md:flex">
            <Link
              href="#contactus"
              className="bg-[#2563EB] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1D4ED8] transition"
            >
              Contact Us
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#2563EB] text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#1D4ED8] transition"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-[#1E40AF] text-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white hover:text-[#93C5FD] block transition-colors"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contactus"
                className="bg-[#2563EB] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#1D4ED8] transition block text-center"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
