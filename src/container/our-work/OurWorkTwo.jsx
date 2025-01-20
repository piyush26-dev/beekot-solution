import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import dotedImg from "../../assets/our-work-doted.png";
// import OurWorkIconOne from "../../assets/our-work-icon-3.png";
// import OurWorkIconTwo from "../../assets/our-work-icon-4.png";
import OurWorkIconOne from "../../assets/our-work-icon.png";
import OurWorkIconTwo from "../../assets/our-work-icon-2.png";
import OurWorkBoxOne from "../../assets/our-work-box-1.png";
import OurWorkVectorOne from "../../assets/our-work-vector-1.png";
import OurWorkLineDotOne from "../../assets/our-work-line-dot-1.png";
import OurWorkVectorDotOne from "../../assets/our-work-vector-dot-1.png";
import OurWorkBoxTwo from "../../assets/our-work-box-2.png";
import OurWorkVectorTwo from "../../assets/our-work-vector-2.png";
import OurWorkLineDotTwo from "../../assets/our-work-line-dot-2.png";
import OurWorkVectorDotTwo from "../../assets/our-work-vector-dot-2.png";
import OurWorkBoxThree from "../../assets/our-work-box-3.png";
import OurWorkVectorThree from "../../assets/our-work-vector-3.png";
import OurWorkLineDotThree from "../../assets/our-work-line-dot-3.png";
import OurWorkVectorDotThree from "../../assets/our-work-vector-dot-3.png";

const OurWork = [
  {
    id: 1,
    name: "Digital",
    paragraph:
      "Digital transformation is the way toward utilizing advanced technologies to make new or adjust existing — business procedures, culture, and client experiences to meet changing business and market necessities. Digital processes by our experts will assist you with improving contact with your clients and inspire your brand esteem.",
    box: OurWorkBoxOne,
    vector: OurWorkVectorOne,
    line: OurWorkLineDotOne,
    vector_dot: OurWorkVectorDotOne,
    card_count: "01",
  },
  {
    id: 2,
    name: "Technology",
    paragraph:
      "In order to stay competitive, create jobs and increase revenue, small businesses need to seriously consider technology trends and how to leverage them. Beekot Solutions helps our customers to create more revenue opportunities through advanced technologies.",
    // box: OurWorkBoxTwo,
    // vector: OurWorkVectorTwo,
    // line: OurWorkLineDotTwo,
    // vector_dot: OurWorkVectorDotTwo,
    box: OurWorkBoxOne,
    vector: OurWorkVectorOne,
    line: OurWorkLineDotOne,
    vector_dot: OurWorkVectorDotOne,
    card_count: "02",
  },
  {
    id: 3,
    name: "Innovation",
    paragraph:
      "Innovation is key to different approaches you can take for your business. Our Experts help you in a way of Incremental, Disruptive, Architectural and Radical Innovation in your business can mean introducing new or improved products, services or processes to remain competitive in the market.",
    // box: OurWorkBoxThree,
    // vector: OurWorkVectorThree,
    // line: OurWorkLineDotThree,
    // vector_dot: OurWorkVectorDotThree,
    box: OurWorkBoxOne,
    vector: OurWorkVectorOne,
    line: OurWorkLineDotOne,
    vector_dot: OurWorkVectorDotOne,
    card_count: "03",
  },
];

const OurWorkTwo = () => {
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 relative space-y-8">
        <div className="w-full flex flex-col justify-center items-start  space-y-8">
          <div className="px-6 w-full space-y-8">
            <div className="flex items-center justify-center w-full">
              <div className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4">
                <div className="flex items-center gap-4  md:w-[9rem] lg:w-[9rem] xl:w-[9rem]">
                  <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                    <img src={iconOne} className="w-full h-full object-fill" />
                  </div>
                  <p className="text-button-text font-text font-semibold ">
                    We Serve
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full border-b border-black/35 pb-6 ">
              <motion.h1
                className="font-heading text-4xl md:text-6xl :text-6xl xl:text-6xl font-semibold text-black-heading mb-4 "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                We Serve
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-8 py-4 relative z-10">
          {OurWork.map((work) => (
            <motion.div
              key={work.id}
              className="cursor-pointer text-black-heading relative rounded-xl flex items-center justify-center p-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className=" shadow-md rounded-xl h-full w-full z-10 bg-white p-4 md:p-8 lg:p-8 xl:p-8 sm:p-6 md:space-y-8 lg:space-y-8 xl:space-y-8 sm:space-y-8 space-y-4">
                <h1 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold sm:mb-4  md:mb-4 lg:mb-4 xl:mb-4 text-center">
                  {work.name}
                </h1>
                <p className="font-text  text-xs md:text-lg lg:text-lg xl:text-lg font-medium max-w-5xl">
                  {work.paragraph}
                </p>
              </div>
              <div className="absolute top-[-0.4rem] left-[-0.4rem] w-[8rem] sm:w-[9rem] md:w-[13.2rem] lg:w-[13.2rem] xl:w-[13.2rem] -z-0">
                <img src={work.box} className="w-full h-full" />
              </div>
              <div className="absolute top-0 right-0 w-[8rem] sm:w-[9rem] md:w-[13.2rem] lg:w-[13.2rem] xl:w-[13.2rem]">
                <img src={work.vector_dot} className="w-full h-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-[4rem] sm:w-[4.9rem] md:w-[7.5rem] lg:w-[7.5rem] xl:w-[7.5rem] z-20">
                <img src={work.vector} className="w-full h-full" />
                <div
                  className="absolute bottom-0 sm:bottom-[-0.5rem] right-2 text-[#FFF] text-sm font-bold"
                  style={{ color: "#FFF" }}
                >
                  {" "}
                  <h1 className="font-heading text-lg sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold mb-4">
                    {work.card_count}
                  </h1>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[9.5rem] sm:h-[9.5rem] md:h-[15.5rem] lg:h-[15.5rem] xl:h-[15.5rem]">
                <img src={work.line} className="w-full h-full" />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute left-[1rem] top-[0rem] lg:left-[7rem] lg:top-[3rem]  md:w-20 md:h-20 w-10 h-10  z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={OurWorkIconOne} className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute right-[0.4rem] top-[5rem] lg:right-[15rem] lg:top-[1rem]  md:w-20 md:h-20 w-10 h-10  z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={OurWorkIconTwo} className="w-full h-full" />
        </motion.div>
        <motion.div className="absolute top-0 w-[20rem]">
          <img src={dotedImg} className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default OurWorkTwo;
