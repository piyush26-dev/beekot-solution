import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  return (
    <>
      <div className="reletive bg-input-bg/35">
        <section className="relative w-full h-screen bg-custom-radial clip-path-customPolygon ">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pb-[10rem]">
            <h1
              className="font-heading text-4xl md:text-6xl font-semibold mb-4"
              style={{ textShadow: "1px 1px 1px #FFF" }}
            >
              Feel Free To Get In Touch
            </h1>
            <p className="font-text  text-base md:text-lg mb-8 max-w-2xl text-white/80">
              We’re here to{" "}
              <span className="font-semibold text-white">connect</span>,
              <span className="font-semibold text-white">collaborate</span>, and{" "}
              <span className="font-semibold text-white">create solutions</span>{" "}
              tailored to your needs. Reach out to{" "}
              <span className="font-semibold text-white">Beekot</span> today and
              let’s achieve success together!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUsSection;
