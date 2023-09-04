import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile-pic.jpeg';

const Hero = () => {
  return (
    <section
      name="home"
      className="w-full h-screen bg-gray-100 pt-16 lg:pt-0 flex flex-col-reverse justify-evenly lg:flex-row lg:justify-center items-center"
    >
      {/*Container*/}
      <div className="max-w-[800px] px-14 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#2d2e32] text-center lg:text-left">
          Full-Stack MERN Developer
        </h1>
        <p className=" text-gray-800 py-4 max-w-[700px] text-center md:text-xl lg:text-left">
          Hi, I'm Isidro Navarro. A passionate full-stack developer based in
          Valencia, Spain.
        </p>
        <button className="text-gray-700 border-2 border-gray-500 px-6 py-4 my-2  hover:bg-gray-700 hover:border-gray-700 hover:text-white duration-100 rounded-sm lg:self-start self-center">
          <Link
            className="flex items-center"
            to="work"
            smooth={true}
            duration={500}
          >
            View work <HiArrowNarrowRight className="ml-3" />
          </Link>
        </button>
      </div>
      <div className="max-w-[256px] sm:max-w-[320px] lg:max-w-[460px]">
        <img
          className="object-cover rounded-md shadow-2xl"
          src={profilePic}
          alt="profile picture"
        />
      </div>
    </section>
  );
};

export default Hero;
