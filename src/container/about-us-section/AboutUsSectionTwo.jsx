import React from 'react'
import { motion } from "framer-motion";
import AboutUSImg from "../../assets/about-us.png";
import vectorLineAbout from "../../assets/vector-line-about.png";
import CountUp from 'react-countup';

const AboutUsSectionTwo = () => {
  return (
    <section className="relative bg-secondry py-4">
      <div className="container mx-auto px-6 space-y-4">
        <div className="w-full lg:flex gap-2 items-center">
          <div className="w-full lg:w-3/5 space-y-4 md:pb-12">
            <motion.h1
              className="font-heading text-4xl md:text-6xl font-semibold text-black-heading "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Beekot Solutions
            </motion.h1>
            <motion.p
              className="font-text  text-sm md:text-lg md:w-[42rem]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Beekot Solutions is one of the top-notch Indian companies in Asia.
              We believe in innovation and advancement as well as we work with a
              passion for creativity. At Beekot Solutions our experts at backend
              work on enhancing the value of your business through Rich Internet
              Applications and Enterprise Mobility solutions. Since the year
              2020, we have been on a lofty development direction with 50+
              technology experts working with different businesses all over the
              world.
            </motion.p>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-center py-6">
            <img src={AboutUSImg} />
          </div>
        </div>
        {/* Stats Section */}
        <div className="w-full pb-4 ">
          <div className="relative z-10 bg-customer-custom-linear lg:shadow-lg lg:rounded-2xl py-10 flex flex-col lg:flex-row justify-between items-center md:items-stretch">
            {/* Stat Item */}
            <div className="flex-1 text-center border-b lg:border-b-0 lg:border-r-2 border-white p-4 space-y-2">
              <h2 className="text-4xl font-bold text-white  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={300} duration={3} />
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 4, // Matches the duration of CountUp
                      duration: 0.3, // Animation duration for the '+'
                    }}
                    className=""
                  >
                    +
                  </motion.span>
                </div>
              </h2>
              <p className="text-white text-xl">Clients Supported</p>
            </div>

            <div className="flex-1 text-center border-b lg:border-b-0 lg:border-r-2 border-white p-4 space-y-2">
              <h2 className="text-4xl font-bold text-white  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={20} duration={3} />
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
              <p className="text-white text-xl">Domain</p>
            </div>

            <div className="flex-1 text-center border-b lg:border-b-0 lg:border-r-2 border-white p-4 space-y-2">
              <h2 className="text-4xl font-bold text-white  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={4} duration={3} />
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 4, // Matches the duration of CountUp
                      duration: 0.3, // Animation duration for the '+'
                    }}
                    className=""
                  >
                    +
                  </motion.span>
                </div>
              </h2>
              <p className="text-white text-xl">Years of Industry Experience</p>
            </div>

            <div className="flex-1 text-center p-4 border-b lg:border-b-0 lg:border-r-2 border-white space-y-2">
              <h2 className="text-4xl font-bold text-white  flex items-center justify-center">
                <div className="flex items-baseline gap-1">
                  <p className="">
                    <CountUp end={95} duration={3} />
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
                    %
                  </motion.span>
                </div>
              </h2>
              <p className="text-white text-xl">Client Retention</p>
            </div>
            <div className="flex-1 text-center p-4 flex justify-center items-center">
              <p className="text-white text-xl">Specialization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[15rem]  hidden lg:block w-full ">
        {" "}
        <img src={vectorLineAbout} className="w-full h-full" />
      </div>
    </section>
  );
}

export default AboutUsSectionTwo