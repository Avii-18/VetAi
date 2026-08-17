import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://assets.mixkit.co/videos/45843/45843-720.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white  bg-opacity-30">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-lg md:text-2xl mb-6">Explore our amazing features</p>
        <div className=' flex flex-col gap-1 space-y-3'>
        <Link
          to="/login"
          className="px-6 py-3 pb-3 bg-amber-600 hover:bg-amber-500 rounded-lg text-white text-lg "
        >
          Get Started
        </Link>

         <Link
          to="/home"
          className="px-6 py-3  bg-amber-600 hover:bg-amber-500 rounded-lg text-white text-lg"
        >
          Guest
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
