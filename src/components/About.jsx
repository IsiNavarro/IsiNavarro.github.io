import React from 'react';
import jestLogo from '../assets/JEST_logo.svg';
import gitLogo from '../assets/Git-Icon.svg';
import mongoDBLogo from '../assets/MongoDB_Logo.svg';
import nodeLogo from '../assets/Node.js_logo.svg';
import tailwindLogo from '../assets/Tailwind_CSS_Logo.svg';
import reactLogo from '../assets/React-icon.svg';
import jsLogo from '../assets/JavaScript_logo.svg';
import cssLogo from '../assets/CSS3_logo.svg';
import htmlLogo from '../assets/HTML5_logo.svg';
import aboutMePic from '../assets/about-me-picture.jpg';

const About = () => {
  return (
    <section
      name="about"
      className="w-full lg:h-screen py-20 flex items-center justify-center"
    >
      <div className="h-full lg:max-w-[1000px] lg:px-8 flex flex-col justify-center gap-20 items-center text-center lg:text-left">
        <div>
          <div className="flex justify-center lg:gap-10">
            <div className="flex flex-col justify-between">
              <h3 className="text-[#2d2e32] font-bold text-4xl mb-4">
                About me
              </h3>
              <p className="text-justify px-4 md:text-lg lg:px-0">
                I am a self-taught programmer with a passion for coding and
                problem-solving. While pursuing my degree in Mechanical
                Engineering at UPV, I discovered my love for programming. I am
                driven by the constant challenges thrown at you while coding and
                am committed to keep on learning and growing in this amazing,
                ever-changing field.
              </p>
            </div>

            <div className="hidden lg:block min-w-[320px] max-w-[320px]">
              <img
                className="object-cover rounded-md shadow-2xl"
                src={aboutMePic}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-[#2d2e32] font-bold text-2xl">Tech tools</h3>
          <span className="ml-4">|</span>
          <div className="grid grid-cols-3 lg:grid-cols-10 grid-flow-row gap-2 p-4 border-1 border-red-50">
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-3 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img className="object-contain" src={htmlLogo} alt="HTML 5" />
            </div>
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-5 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img className="object-contain" src={cssLogo} alt="CSS 3" />
            </div>
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-4 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img
                className="object-contain"
                src={jsLogo}
                alt="JavaScript ES6"
              />
            </div>
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-3 pt-4 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img className="object-contain" src={reactLogo} alt="React" />
            </div>

            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-3 pt-4 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img
                className="object-contain"
                src={tailwindLogo}
                alt="Tailwind CSS"
              />
            </div>
            {/*<div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-2 pt-5 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img
                className="object-contain"
                src={nodeLogo}
                alt="Express Node.js"
              />
            </div>
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] pt-2 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img className="object-contain" src={mongoDBLogo} alt="MongoDB" /> 
  </div> */}
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-4 pt-6 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img className="object-contain" src={gitLogo} alt="Git" />
            </div>
            <div className="rounded-lg shadow-lg w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] p-3 pt-5 flex items-center justify-center hover:scale-[105%] hover:cursor-pointer duration-200">
              <img
                className="object-contain"
                src={jestLogo}
                alt="JEST Testing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
