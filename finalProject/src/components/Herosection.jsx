import React from 'react';
import heroImage from '../assets/hero-img.png'; // Make sure the path is correct

const HeroSection = () => {
  return (
    <section id="heroSection" className=" py-10 md:py-10 ">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Grow your business with Quixillinx
        </h2>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-8">
          We are a team of talented designers
        </p>
        {/* <button className="bg-blue-500 text-white px-6 py-3 rounded mb-10">Get Started</button>  */}
        <img src={heroImage} alt="Hero" className="mx-auto max-w-full h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
