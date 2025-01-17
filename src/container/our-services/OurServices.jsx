import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import OurWorkIconOne from "../../assets/our-work-icon.png";
import OurWorkIconTwo from "../../assets/our-work-icon-2.png";
import { MoveRight } from "lucide-react";
import OurServiceIconOne from "../../assets/our-service-1.png";
import OurServiceIconTwo from "../../assets/our-service-2.png";
import OurServiceIconThree from "../../assets/our-service-3.png";
import OurServiceIconFour from "../../assets/our-service-4.png";
import OurServiceRectangleAwrrow from "../../assets/our-sercive-rectangle-arrow.png";

const ourServiceData = [
  {
    id: 1,
    name: "Start Up Services",
    icon: OurServiceIconOne,
    vector: OurServiceRectangleAwrrow,
    card_count: "01",
  },
  {
    id: 2,
    name: "Web/ Mobile Development",
    icon: OurServiceIconTwo,
    vector: OurServiceRectangleAwrrow,
    card_count: "02",
  },
  {
    id: 3,
    name: "Creative Services",
    icon: OurServiceIconThree,
    vector: OurServiceRectangleAwrrow,
    card_count: "03",
  },
  {
    id: 4,
    name: "Digital Marketing",
    icon: OurServiceIconFour,
    vector: OurServiceRectangleAwrrow,
    card_count: "04",
  },
];

const OurServices = () => {
  return (
    <section className="relative w-full min-h-screen bg-cover-img-our-service flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-secondry bg-opacity-75"></div>
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center justify-center text-center text-white space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
              <img src={iconOne} className="w-full h-full object-fill" />
            </div>
            <p className="text-button-text font-text font-semibold">
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

        {/* Service Cards */}
        <div className="sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 md:gap-[5.5rem] lg:gap-1 gap-4 py-4">
          {ourServiceData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-button-text/70 md:bg-transparent sm:p-0 cursor-pointer text-black-heading relative rounded-xl flex flex-col items-center justify-center md:p-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="shadow-md rounded-xl rounded-br-3xl rounded-bl-3xl md:rounded-full z-10 bg-white p-4 md:p-8 sm:p-6 space-y-4 w-full sm:w-[15rem] md:w-[15rem] sm:h-[11rem] md:h-[15rem]">
                <div className="flex items-center justify-center">
                  <div className="w-[2.5rem]">
                    <img src={service.icon} className="w-full h-full" />
                  </div>
                </div>
                <h1 className="font-heading text-lg sm:text-xl md:text-xl font-semibold text-center">
                  {service.name}
                </h1>
              </div>
              <div className="sm:hidden md:block hidden absolute bottom-[-4rem] left-[4.2rem] w-[4rem] sm:w-[4.9rem] md:w-[7.5rem] z-20">
                <img src={service.vector} className="w-full h-full" />
                <div
                  className="absolute top-[4rem] left-[2rem] text-[#FFF] text-sm font-bold"
                  style={{ color: "#FFF" }}
                >
                  <h1 className="font-heading text-lg sm:text-3xl md:text-5xl font-semibold">
                    {service.card_count}
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center md:hidden p-4">
                <h1 className="font-heading text-lg sm:text-3xl md:text-5xl font-semibold text-white">
                  {service.card_count}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="w-full flex items-center justify-center pt-[3rem] md:pt-[4rem]">
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

        {/* Floating Icons */}
        <motion.div
          className="absolute left-[0.2rem] top-[8rem] lg:left-[18.5rem] lg:top-[9.5rem] md:w-20 md:h-20 w-10 h-10 z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={OurWorkIconOne} className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute right-0 top-[5rem] lg:right-[24rem] lg:top-[2rem] md:w-20 md:h-20 w-10 h-10 z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={OurWorkIconTwo} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
