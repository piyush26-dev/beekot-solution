import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  return (
    <div className="reletive bg-input-bg/35">
      <section className="relative bg-custom-radial clip-path-customPolygon   text-white pt-[10rem]  min-h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1
            className="font-heading text-4xl md:text-6xl font-semibold mb-4"
            style={{ textShadow: "1px 1px 1px #FFF" }}
          >
            Feel Free To Get In Touch
          </h1>
          <p className="font-text  text-base md:text-lg mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Sed dapibus facilisis ut
            ultricies amet neque magna rhoncus. Id placerat auctor pharetra
            etiam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactUsSection;
