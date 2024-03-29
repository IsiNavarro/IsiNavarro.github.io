import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import MemoryImage from '../assets/isinavarro-odin-memory-app.netlify.app_ (1).png';
import BattleshipImage from '../assets/isinavarro.github.io_odin-Battleship_.png';
import CVImage from '../assets/isinavarro-odin-cv-app.netlify.app_.png';
import RFImage from '../assets/isinavarro-odin-shopping-cart.netlify.app_ (2).png';

const Work = () => {
  return (
    <section
      name="work"
      className="w-full bg-gray-100 py-20 flex flex-col justify-center items-center"
    >
      <div className="flex justify-center lg:gap-10 max-w-[1000px]">
        <div className="flex flex-col justify-between">
          <h3 className="text-[#2d2e32] font-bold text-4xl mb-4 text-center">
            Projects
          </h3>
          <p className="text-justify px-4 md:text-lg lg:px-0 mb-12">
            Check out some of the projects I've worked on!
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] h-full flex flex-col justify-center items-center gap-6">
        <div className="bg-white mx-3 py-4 px-8 rounded-md flex flex-col justify-center items-center md:flex-row shadow-lg md:gap-6">
          <a
            href="https://isinavarro-odin-shopping-cart.netlify.app/"
            target="_blank"
            className="my-6 max-w-[420px]"
            rel="noreferrer"
          >
            <img
              className="object-cover rounded-md shadow-xl"
              src={RFImage}
              alt="project pic"
            />
          </a>

          <div className="flex flex-col gap-4 mb-4 justify-evenly">
            <h4 className="text-center md:text-left  text-xl font-bold text-gray-800">
              RF Möbel | Minimalism furniture
            </h4>
            <p>
              A clean fully responsive e-commerce mock website where customers
              can filter, find and add different types of furniture to a
              shopping cart, created to practise routing with REACT.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="rounded-lg shadow-lg shadow-[#61dafbb7] px-3 py-1 font-bold text-[#61DAFB]">
                REACT
              </div>
              <div className="rounded-lg shadow-lg shadow-[#06b5d4b9] px-3 py-1 font-bold text-[#06B6D4]">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-evenly py-4">
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/IsiNavarro/odin-ShoppingCart"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <FaGithub size={24} />
                </a>
              </button>
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://isinavarro-odin-shopping-cart.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FiExternalLink size={24} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white mx-3 py-4 px-8 rounded-md flex flex-col justify-center items-center md:flex-row-reverse shadow-lg md:gap-6">
          <a
            href="https://isinavarro-odin-memory-app.netlify.app/"
            target="_blank"
            className="my-6 max-w-[420px]"
            rel="noreferrer"
          >
            <img
              className="object-cover rounded-md shadow-xl"
              src={MemoryImage}
              alt="project pic"
            />
          </a>

          <div className="flex flex-col gap-4 mb-4 justify-evenly">
            <h4 className="text-center md:text-left  text-xl font-bold text-gray-800">
              ART GALLERY | Memoseum
            </h4>
            <p>A memory card game with 3 different levels of difficulty. </p>
            <p className="my-1">
              The objective is simple: click on as many famous paintings as you
              can, but here's the catch – you can't click on the same
              masterpiece twice!
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="rounded-lg shadow-lg shadow-[#61dafbb7] px-3 py-1 font-bold text-[#61DAFB]">
                REACT
              </div>
              <div className="rounded-lg shadow-lg shadow-[#06b5d4b9] px-3 py-1 font-bold text-[#06B6D4]">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-evenly py-4">
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/IsiNavarro/odin-memory-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <FaGithub size={24} />
                </a>
              </button>
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://isinavarro-odin-memory-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FiExternalLink size={24} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white mx-3 py-4 px-8 rounded-md flex flex-col justify-center items-center md:flex-row lg:items-start shadow-lg md:gap-6">
          <a
            href="https://isinavarro-odin-cv-app.netlify.app/"
            target="_blank"
            className="my-6 max-w-[420px]"
            rel="noreferrer"
          >
            <img
              className="object-cover rounded-md shadow-xl"
              src={CVImage}
              alt="project pic"
            />
          </a>

          <div className="flex flex-col gap-4 mb-4 justify-evenly py-5">
            <h4 className="text-center md:text-left  text-xl font-bold text-gray-800">
              CV App
            </h4>
            <p>
              This app lets you create a personal CV. As you enter your
              information, a visual representation will be rendered on the side,
              so that you can see how it will look like.
            </p>
            <p>
              Once you're happy with the result, you can then press a button to
              download it as a PDF file.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="rounded-lg shadow-lg shadow-[#61dafbb7] px-3 py-1 font-bold text-[#61DAFB]">
                REACT
              </div>
              <div className="rounded-lg shadow-lg shadow-[#06b5d4b9] px-3 py-1 font-bold text-[#06B6D4]">
                TailwindCSS
              </div>
            </div>
            <div className="flex justify-evenly py-4">
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/IsiNavarro/odin-CV-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <FaGithub size={24} />
                </a>
              </button>
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://isinavarro-odin-cv-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FiExternalLink size={24} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white mx-3 py-4 px-8 rounded-md flex flex-col justify-center items-center md:flex-row-reverse shadow-lg md:gap-6">
          <a
            href="https://isinavarro.github.io/odin-Battleship/"
            target="_blank"
            className="my-6 max-w-[420px]"
            rel="noreferrer"
          >
            <img
              className="object-cover rounded-md shadow-xl"
              src={BattleshipImage}
              alt="project pic"
            />
          </a>

          <div className="flex flex-col gap-4 mb-4 justify-evenly">
            <h4 className="text-center md:text-left  text-xl font-bold text-gray-800">
              BATTLESHIP
            </h4>
            <p>
              The old Battleship carboard game in the browser. Built with
              vanilla HTML, CSS and JS. The main purpose of the project was to
              practice testing with Jest.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="rounded-lg shadow-lg shadow-[#f7de1e7c] px-3 py-1 font-bold text-[#f7df1e]">
                JavaScript
              </div>
              <div className="rounded-lg shadow-lg shadow-[#99425b75] px-3 py-1 font-bold text-[#99425b]">
                Jest
              </div>
            </div>
            <div className="flex justify-evenly py-4">
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://github.com/IsiNavarro/odin-Battleship"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code <FaGithub size={24} />
                </a>
              </button>
              <button className="text-xl hover:text-orange-500 duration-300">
                <a
                  className="flex items-center gap-2"
                  href="https://isinavarro.github.io/odin-Battleship/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FiExternalLink size={24} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
