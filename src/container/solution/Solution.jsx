import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import supportImg from "../../assets/solution-img.png";
import supportIconOne from "../../assets/support-icon-1.png";
import supportIconTwo from "../../assets/support-icon-2.png";
import supportIconThree from "../../assets/support-icon-3.png";

const features = [
  {
    icon: supportIconOne, // Replace with the actual icon or image URL
    title: "Managed Cybersecurity: ",
    description: "Protect your business from cyberattacks around the clock.",
  },
  {
    icon: supportIconTwo, // Replace with the actual icon or image URL
    title: "IT Consulting: ",
    description: "Turn your technology into a competitive edge.",
  },
  {
    icon: supportIconThree, // Replace with the actual icon or image URL
    title: "Digital Transformation: ",
    description:
      "Achieve operational excellence with the latest digital solutions.",
  },
  {
    icon: supportIconThree, // Replace with the actual icon or image URL
    title: "Cloud Solutions: ",
    description:
      "Reduce your IT costs and improve efficiency with cloud solutions.",
  },
];

const Solution = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 ">
        <div className="w-full lg:flex gap-4 lg:flex-row-reverse">
          <div className="w-full lg:w-3/5 space-y-4 md:pb-12">
            <div className="w-full mb-">
              <div className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4">
                <div className="flex items-center gap-4  md:w-[9rem]">
                  <div className="flex items-center justify-center p-2 h-8 w-8 bg-white/70 shadow-md rounded-full">
                    <img src={iconOne} className="w-full h-full object-fill" />
                  </div>
                  <p className="text-button-text font-text font-semibold ">
                    Solution
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-semibold text-black-heading md:tracking-wide md:leading-relaxed md:border-none md:pb-0  border-b-4 border-black/35 pb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* Indian Based UAE Operating  */}
                IT Services and Technology Solutions
              </motion.h1>
              <div className="md:block hidden border-b-4 border-black/35 pb-6 mr-[3rem]"></div>
            </div>
            <div className="w-full">
              <div className=" space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-button-text rounded-full text-xl p-2">
                      <img src={feature.icon} className="h-full w-full" />
                    </div>
                    <div>
                      <p className="font-text  ">
                        <span className="font-bold">{feature.title}</span>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-center py-6">
            <img src={supportImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
