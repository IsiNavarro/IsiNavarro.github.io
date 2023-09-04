import React from 'react';
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full lg:h-[50vh] px-6 bg-white flex flex-col py-20 justify-evenly items-center"
    >
      <div className="max-w-[1000px] w-full flex flex-col md:text-left">
        <h3 className="text-gray-700 font-bold text-2xl">Contact</h3>
        <p className="text-[#2d2e32] font-bold text-4xl mb-4">
          Don't be shy! Hit me up 👇
        </p>
      </div>
      <div className="flex lg:w-[1000px] lg:flex-row lg:justify-between flex-col max-w-[1000px] items-start gap-2">
        <a
          href="https://www.linkedin.com/in/isidro-navarro-oporto"
          target="_blank"
          className="flex justify-center items-center gap-4 text-gray-700"
          rel="noreferrer"
        >
          <div className="rounded-xl shadow-xl shadow-blue-200 w-[64px] h-[64px] text-blue-500 flex items-center justify-center">
            <FaLinkedin size={30} />
          </div>
          <div>
            <h4 className="text-xl text-gray-900 font-bold">LinkedIn:</h4>
            <p>Isidro Navarro Oporto</p>
          </div>
        </a>
        <a
          href="https://github.com/IsiNavarro"
          target="_blank"
          className="flex justify-center items-center gap-4 text-gray-700"
          rel="noreferrer"
        >
          <div className="rounded-xl shadow-xl shadow-orange-200 w-[64px] h-[64px] text-orange-500 flex items-center justify-center">
            <FaGithub size={30} />
          </div>
          <div>
            <h4 className="text-xl text-gray-900 font-bold">GitHub:</h4>
            <p>IsiNavarro</p>
          </div>
        </a>
        <a
          href="mailto:isinavarrooporto@gmail.com"
          className="flex justify-center items-center gap-4 text-gray-700"
        >
          <div className="rounded-xl shadow-xl shadow-teal-200 w-[64px] h-[64px] text-teal-500 flex items-center justify-center">
            <HiOutlineMail size={30} />
          </div>
          <div>
            <h4 className="text-xl text-gray-900 font-bold">Mail:</h4>
            <p>isinavarrooporto@gmail.com</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
