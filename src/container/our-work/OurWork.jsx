import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import { MoveRight } from "lucide-react";
import OurWorkImg from "../../assets/our-work.png";
import OurWorkIconOne from "../../assets/our-work-icon.png";
import OurWorkIconTwo from "../../assets/our-work-icon-2.png";
import { useNavigate } from "react-router-dom";


const OurWork = () => {

  const navigete = useNavigate();

  const GoToContact = () => {
    navigete("/contact");
  };

  return (
    <div className="bg-secondry md:pt-16 md:pb-[12rem] py-12 overflow-x-hidden over-work ">
      <div className="container mx-auto px-6 flex flex-col md:flex-col lg:flex-row items-center justify-center relative   ">
        <div className="w-full md:pt-12 flex flex-col justify-center items-start  space-y-8  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="inline-block bg-white/35 rounded-full shadow-lg py-1 px-4"
          >
            <div className="flex items-center gap-4  md:w-[9rem]">
              <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                <img src={iconOne} className="w-full h-full object-fill" />
              </div>
              <p className="text-button-text font-text font-semibold ">
                Our Work
              </p>
            </div>
          </motion.div>
          <motion.h1
            className="font-heading text-4xl md:text-6xl font-semibold text-black-heading mb-4 border-b border-black/35 pb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What we do
          </motion.h1>
          <motion.p
            className="font-text  text-sm md:text-lg md:w-[42rem]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Our motive is to deliver exceptional results to all of our esteemed
            clients stretched across the digital world. Along with the leading
            technologies we strive to help a number of companies to realize
            their potential. Our major objective is to provide innovative ideas
            and strategic methodologies with cost effective business solutions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="bg-[#2F6F6F] font-text text-sm text-white px-6 py-3 rounded-md shadow-md flex items-center gap-4"
            onClick={GoToContact}
          >
            Learn More <MoveRight className="text-white/80" />
          </motion.button>
          <motion.div
            className="absolute right-[2rem] top-[24rem] md:left-[22rem] md:top-[22rem] w-10 h-10  md:w-20 md:h-20 "
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={OurWorkIconOne} className="w-full h-full" />
          </motion.div>
          <motion.div
            className="absolute right-[5rem] top-[20rem] md:left-[32rem] md:top-[29rem]  md:w-20 md:h-20  w-10 h-10 "
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={OurWorkIconTwo} className="w-full h-full" />
          </motion.div>
          <motion.div
            className=" lg:absolute lg:h-[40rem] top-[-2rem] lg:right-[-6.7rem]  "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={OurWorkImg} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;