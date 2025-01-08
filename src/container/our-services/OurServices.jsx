import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import OurWorkIconOne from "../../assets/our-work-icon-3.png";
import OurWorkIconTwo from "../../assets/our-work-icon-4.png";
import { MoveRight } from "lucide-react";

const OurServices = () => {
  return (
    <section className="relative w-full h-screen bg-cover-img-our-service">
      <div className="absolute inset-0 bg-secondry bg-opacity-75">
        <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center justify-center text-center text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4"
          >
            <div className="flex items-center gap-4  ">
              <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                <img src={iconOne} className="w-full h-full object-fill" />
              </div>
              <p className="text-button-text font-text font-semibold ">
                See What We Provide
              </p>
            </div>
          </motion.div>
          <motion.h1
            className="font-heading text-4xl md:text-6xl font-semibold text-black-heading mb-4 border-b border-black/35 pb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 relative z-10"></div>
          <div className="w-full flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#2F6F6F] font-text text-sm text-white px-6 py-3 rounded-md shadow-md flex items-center gap-4"
            >
              Learn More <MoveRight className="text-white/80" />
            </motion.button>
          </div>
          <motion.div
            className="absolute left-[0.2rem] top-[8rem] md:left-[18.5rem] md:top-[9.5rem]  w-20 h-20  z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={OurWorkIconOne} className="w-full h-full" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-[2rem] md:right-[24rem] md:top-[2rem]  w-20 h-20  z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={OurWorkIconTwo} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
