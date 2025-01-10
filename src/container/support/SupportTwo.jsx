import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import LineprogessImg from "../../assets/lineprogess.png";
import fullSizeLineprogessImg from "../../assets/full-size-our-service-img.png";

  const steps = [
    { number: "01", label: "Analysis" },
    { number: "02", label: "Strategy" },
    { number: "03", label: "Performance" },
    { number: "04", label: "Improvement" },
  ];

const SupportTwo = () => {
  return (
    <section className="py-16 bg-secondry">
      <div className="container mx-auto px-6 space-y-8">
        <div className="flex items-center justify-center">
          <div className="inline-block bg-white/70 rounded-full shadow-lg py-1 px-4">
            <div className="flex items-center gap-4  md:w-[9rem]">
              <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                <img src={iconOne} className="w-full h-full object-fill" />
              </div>
              <p className="text-button-text font-text font-semibold ">
                Support
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-black-heading  border-b border-black/35 pb-4 mb-4">
            Our IT Consulting Process
          </h1>
          <p className="font-text  text-xs md:text-lg  max-w-5xl">
            A decade deep, and we're still innovating. Intellectsoft's legacy
            thrives on reshaping IT strategies for diverse organizations. With a
            team of seasoned experts, many boasting over fifteen years of
            hands-on experience, we're a powerhouse of knowledge and skill. Our
            approach? Delivering tailored solutions swiftly, ensuring tangible
            value every single tim
          </p>
        </div>
        <div className="w-full ">
          <div className="w-full">
            <img src={fullSizeLineprogessImg} alt="" />
          </div>
        </div>
        <div className="w-full relative hidden ">
          <div className="w-full">
            <img src={LineprogessImg} alt="" />
          </div>
          <div className="absolute top-[2rem] left-[-0.1rem] sm:top-[7rem] sm:left-[-0.1rem] md:top-[12rem] md:left-[1.7rem]  lg:top-[12rem] lg:left-[1.7rem]">
            <div className="space-y-4 lg:space-y-16 sm:space-y-8 md:space-y-10 text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem]  rounded-full shadow-lg bg-white">
                <h1 className="font-heading text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                  01
                </h1>
              </div>
              <h1 className="font-heading font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl">
                Analysis
              </h1>
            </div>
          </div>
          <div className="absolute top-[3rem] left-[4rem] sm:top-[9rem] sm:left-[9rem] md:top-[17rem] md:left-[22.5rem] lg:top-[19rem] lg:left-[26rem]">
            <div className="space-y-4 lg:space-y-16 sm:space-y-8 md:space-y-10 text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] rounded-full shadow-lg bg-white">
                <h1 className="font-heading text-xl sm:text-3xl md:text-5xl  lg:text-6xl font-bold">
                  02
                </h1>
              </div>
              <h1 className="font-heading font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl">
                Strategy
              </h1>
            </div>
          </div>
          <div className="absolute top-[-1.2rem] left-[6rem] sm:top-[0rem] sm:left-[15rem] md:top-[0rem] md:left-[34rem] lg:top-[0rem] lg:left-[41rem]">
            <div className="space-y-2 lg:space-y-6 sm:space-y-5  md:space-y-10 text-center flex flex-col items-center">
              <h1 className="font-heading font-bold text-xs sm:text-xl ms:text-2xl lg:text-3xl">
                Performance
              </h1>
              <div className="flex items-center justify-center w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] md:w-[6rem] md:h-[6rem]  lg:w-[8rem] lg:h-[8rem] rounded-full shadow-lg bg-white">
                <h1 className="font-heading text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                  03
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute top-[2rem] right-[-1rem] sm:top-[6rem] sm:right-[-2rem] md:top-[8rem] md:right-[1.7rem]">
            <div className="space-y-4 lg:space-y-16 sm:space-y-8  md:space-y-10 ">
              <div className="flex items-center justify-center w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] rounded-full shadow-lg bg-white">
                <h1 className="font-heading text-xl sm:text-3xl md:text-5xl lg:text-6xl  font-bold">
                  04
                </h1>
              </div>
              <h1 className="font-heading font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl">
                Improvement
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTwo;
