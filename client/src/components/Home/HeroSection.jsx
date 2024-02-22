import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/heroImage.png';

const HeroSection = () => {
  const headerHeight = 64; // Adjust this value based on your actual header height

  return (
    <section className="bg-white dark:bg-gray-100" style={{ paddingTop: `${headerHeight}px` }}>
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 pt-10 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-blue-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">India's Premier Homeopathy Clinic</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">At Modern Homeopathic Clinic, we redefine wellness through personalized care and genuine healing. Our dedicated team, led by the esteemed Dr. Priyanka Maurya, is committed to delivering high-quality homeopathic treatment.</p>
          <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-blue-900 border-white rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-gray-100">
            Contact Now
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
