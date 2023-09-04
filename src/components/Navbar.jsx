import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed w-full flex justify-between items-center px-10 py-7 bg-white text-[#2d2e32] text-xl font-normal shadow-sm">
      <h3 className="p-0 text-xl font-bold cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          IsiNavarro.dev
        </Link>
      </h3>

      {/*Desktop*/}
      <ul className="hidden md:flex">
        <li className="hover:text-orange-500 duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-orange-500 duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-orange-500 duration-300">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-orange-500 duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburguer*/}
      <div
        onClick={handleClick}
        className="md:hidden cursor-pointer hover:text-orange-500 z-10 duration-200"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900   flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl text-gray-100 hover:text-orange-500 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl text-gray-100 hover:text-orange-500 duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl text-gray-100 hover:text-orange-500 duration-300">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl text-gray-100 hover:text-orange-500 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden fixed xl:flex flex-col top-[35%] left-0">
        <ul className="font-bold">
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-md">
            <a
              href="https://www.linkedin.com/in/isidro-navarro-oporto"
              target="_blank"
              className="w-full flex justify-between gap-3 items-center text-white text-base"
              rel="noreferrer"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400 rounded-md">
            <a
              href="https://github.com/IsiNavarro"
              target="_blank"
              rel="noreferrer"
              className="w-full flex justify-between gap-3 items-center text-white text-base"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-200 rounded-md">
            <a
              href="mailto:isinavarrooporto@gmail.com"
              className="w-full flex justify-between gap-3 items-center text-white text-base"
            >
              E-Mail
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800 rounded-md">
            <a
              href="/"
              className="w-full flex justify-between gap-3 items-center text-white text-base"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
