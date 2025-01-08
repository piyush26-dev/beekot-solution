import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import industryImage1 from "../../assets/enterprises-img.jpg";
import industryImage2 from "../../assets/startup-img.jpg";
import industryImage3 from "../../assets/sme-img.jpg";
import industryImage4 from "../../assets/government-img.jpg";


  const industries = [
    {
      id: 1,
      name: "Enterprises",
      image: industryImage1,
      paragraph:
        "We are glad to serve huge firms and large enterprises with high revenue along with a huge number of employees. We assure you to provide efficiency and deliver exceptional value to our esteemed clients.",
    },
    {
      id: 2,
      name: "Startup",
      image: industryImage2,
      paragraph:
        "The firms which are on their developing stage and limited with their operations, funding, etc. Specially focused guidance from our expertise helps a blooming startup for their further growth.",
    },
    {
      id: 3,
      name: "SME",
      image: industryImage3,
      paragraph:
        "Small and Medium Enterprises that maintain revenues, assets, or number of employees below a certain level. When it comes to SMEs we help them to build strong relationships with their customers.",
    },
    { id: 4, name: "Government", image: industryImage4, paragraph: "Where these companies need to understand various crises and look after a huge number of citizens, we assure them to provide a hassle-free service with the help of our professionals and upcoming technologies." },
  ];

const IndustryWeServe = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 space-y-8">
        <div className="flex items-center justify-center">
          <div className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                <img src={iconOne} className="w-full h-full object-fill" />
              </div>
              <p className="text-button-text font-text font-semibold ">
                Industry We Serve
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 border-b border-black/35 pb-4">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-black-heading mb-4">
            Whom we serve
          </h1>
          <p className="font-text  text-sm md:text-lg  max-w-5xl">
            We provide tailored IT solutions for startups and enterprises,
            offering strategic consultancy and development to enhance your
            brand. Our expertise ensures quality, speed, and exceeding
            expectations for businesses of any size.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 py-4">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className="bg-white/70 shadow-lg rounded-xl overflow-hidden cursor-pointer text-black-heading hover:bg-button-text hover:text-white duration-300 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="px-7  py-3">
                <h1 className="font-heading text-sm md:text-base font-bold mb-4">
                  {industry.name}
                </h1>
                <p className="font-text  text-xs md:text-base font-medium  max-w-5xl">
                  {industry.paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="inline-block ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#2F6F6F] font-text text-sm text-white px-6 py-3 rounded-md shadow-md"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWeServe;
