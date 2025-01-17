import React from 'react'
import { motion } from "framer-motion";
import TestimonialCarousel from './TestimonialCarousel';

const AboutUsSectionThree = () => {
  return (
    <section className="relative bg-white z-10 overflow-x-auto no-scroll">
      <div className="relative bg-custom-gradient py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-col lg:flex-row items-center justify-center relative   ">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center px-4 ">
              <h1 className="font-heading text-4xl md:text-6xl font-semibold text-black-heading mb-4">
                What Our Client Say
              </h1>
              <h1 className="font-heading text-4xl md:text-6xl font-semibold text-black-heading mb-4">
                About Us
              </h1>
              <p className="font-text  text-sm md:text-lg lg:w-[52rem]  max-w-5xl">
                Lorem ipsum dolor sit amet consectetur. Dolor a sapien quis
                facilisi lacus sed. Feugiat placerat ut morbi auctor sit in. In
                sagittis sed augue mus tellus.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSectionThree