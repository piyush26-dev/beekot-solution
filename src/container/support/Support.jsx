import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/icon-1.png";
import supportImg from "../../assets/support-img.png";
import supportIconOne from "../../assets/support-icon-1.png";
import supportIconTwo from "../../assets/support-icon-2.png";
import supportIconThree from "../../assets/support-icon-3.png";


const features = [
  {
    icon: supportIconOne, // Replace with the actual icon or image URL
    title: "Improve Security & Compliance: ",
    description:
      "Stay secure and compliant with our advanced cybersecurity solutions, including 24/7 monitoring, management and remediation by our dedicated team of cyber experts.",
  },
  {
    icon: supportIconTwo, // Replace with the actual icon or image URL
    title: "Accelerate Digital Transformation: ",
    description:
      "Experience a seamless transition to the digital era with our team of technology experts, and discover how you can optimize your operations and unlock new opportunities.",
  },
  {
    icon: supportIconThree, // Replace with the actual icon or image URL
    title: "Apply Al-Powered Solutions: ",
    description:
      "Embrace the future with our Al expertise. We combine the potential of Al with deep Industry knowledge to deliver Intelligent solutions that can create competitive advantage",
  },
];

const Support = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 ">
        <div className="w-full md:flex gap-2">
          <div className="w-full md:w-3/5 space-y-4">
            <div className="w-full mb-8">
              <div className="inline-block bg-secondry rounded-full shadow-lg py-1 px-4">
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
            <div className="w-full">
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-semibold text-black-heading md:tracking-wide md:leading-relaxed md:border-none md:pb-0  border-b-4 border-black/35 pb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Get The Strategic Expertise You Need - Beyond Basic IT Support!
              </motion.h1>
              <div className="md:block hidden border-b-4 border-black/35 pb-6 mr-[4.5rem]"></div>
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
          <div className="w-full md:w-2/5 flex items-center justify-center py-6">
            <img src={supportImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
