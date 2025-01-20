import React from 'react'

const AboutUsSection = () => {
  return (
    <div className="reletive bg-cover-img-about-us">
      <section className="relative text-white pt-[10rem] py-16 text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1
          className="font-heading text-4xl md:text-6xl font-semibold mb-4 z-10 relative"
          style={{ textShadow: "1px 1px 1px #FFF" }}
        >
          About Us
        </h1>
      </section>
    </div>
  );
}

export default AboutUsSection