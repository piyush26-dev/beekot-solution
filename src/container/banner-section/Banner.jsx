import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import bgImage from "../../assets/bg-image.png"
import CountUp from "react-countup";
import BannerVideoBg from "../../assets/home-bg-baaner.mp4";
import BlacImage from "../../assets/blackImg.png";

const Banner = () => {
  return (
    <div className="reletive">
      <section className="relative w-full h-screen overflow-hidden " id="banner">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={BannerVideoBg} // Replace with the path to your video
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Gradient for Bottom Opacity */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div> */}
        <div className="absolute bottom-[-30%] left-0 w-full ">
          <img
            src={BlacImage} // Replace with your image source
            alt="Descriptive alt text"
            className="w-full object-cover h-full" // Adjust size as per need
          />
        </div>
        <div className="pt-[30rem] relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "1px 1px 1px #FFF" }}
          >
            <span className=" text-primery ">BEEKOT</span> SOLUTIONS
          </h1>
          <p className="font-text  text-lg md:text-xl mb-8 max-w-2xl">
            IT Services and Technology Solutions
          </p>
          {/* <motion.div
            className="text-left font-text border border-white/70 text-sm  text-white rounded-md px-6 py-3 shadow-lg md:w-[18rem]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typewriter
              options={{
                strings: ["Hello There !", "Welcome To Beekot Solutions"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </motion.div> */}
        </div>
      </section>
      {/* Stats Section */}
      <div className="md:absolute bottom-[-25px] w-full ">
        <div className="container mx-auto md:px-6">
          <div className="bg-secondry md:shadow-lg md:rounded-2xl py-4 px-4 flex flex-col md:flex-row justify-between items-center md:items-stretch">
            {/* Stat Item */}
            <div className="flex-1 text-center border-b md:border-b-0 md:border-r-2 border-button-text p-4">
              <h2 className="text-3xl font-bold text-button-text">
                <CountUp end={15} duration={3} />
              </h2>
              <p className="text-text-black">Years Of Experience</p>
            </div>

            <div className="flex-1 text-center border-b md:border-b-0 md:border-r-2 border-button-text p-4">
              <h2 className="text-3xl font-bold text-button-text  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={50} duration={3} />
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 3, // Matches the duration of CountUp
                      duration: 0.3, // Animation duration for the '+'
                    }}
                    className=""
                  >
                    +
                  </motion.span>
                </div>
              </h2>
              <p className="text-text-black">IT Professional</p>
            </div>

            <div className="flex-1 text-center border-b md:border-b-0 md:border-r-2 border-button-text p-4">
              <h2 className="text-3xl font-bold text-button-text  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={500} duration={3} />
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 3, // Matches the duration of CountUp
                      duration: 0.3, // Animation duration for the '+'
                    }}
                    className=""
                  >
                    +
                  </motion.span>
                </div>
              </h2>
              <p className="text-text-black">Success Stories</p>
            </div>

            <div className="flex-1 text-center p-4">
              <h2 className="text-3xl font-bold text-button-text  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={15} duration={3} />
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 3, // Matches the duration of CountUp
                      duration: 0.3, // Animation duration for the '+'
                    }}
                    className=""
                  >
                    +
                  </motion.span>
                </div>
              </h2>
              <p className="text-text-black">Industries Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
