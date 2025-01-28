import React from "react";
import { motion } from "framer-motion";
import iconOne from "../../assets/services-three-icon-1.png";
import iconTwo from "../../assets/services-three-icon-2.png";
import iconThree from "../../assets/services-three-icon-3.png";
import iconFour from "../../assets/services-three-icon-4.png";
import imageOne from "../../assets/services-three-image-1.png";
import imageTwo from "../../assets/services-three-image-2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const servicesData = [
  {
    id: 1,
    title: "User Experience",
    description:
      "Our experts help the organization to deal with professional’s pain points, try to eliminate them and design a solution for our customers.",
    icon: iconOne,
  },
  {
    id: 2,
    title: "Production",
    description:
      "Combine Video, Animation and Motion Graphics with the pinch of communication trend to connect clients with their audience to tell their story.",
    icon: iconTwo,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "We support various businesses by implementing digital marketing tactics to effectively reach and engage their target consumers online.",
    icon: iconThree,
    image: imageOne,
  },
  {
    id: 4,
    title: "Branding",
    description:
      "When you want to stand out in a saturated market you need to switch to branding. We dive into understanding your customer’s perception and help you to build the value of your brand and products in the marketplace.",
    icon: iconFour,
    image: imageTwo,
  },
];

const CreativeServices = () => {
  const navigate = useNavigate();

 const handleBack = () => {
   navigate("/web-development");
 };

 const handleNext = () => {
   navigate("/digital-marketing");
 };

  return (
    <>
      <div className="reletive">
        <section
          className="relative w-full h-screen bg-cover-img-three-service"
          id="banner"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1
              className="font-heading text-4xl md:text-6xl font-bold mb-4"
              style={{ textShadow: "1px 1px 1px #FFF" }}
            >
              Creative Services
            </h1>
            <p className="font-text  text-lg md:text-xl mb-8  max-w-2xl lg-max-w-[55rem] xl:max-w-[60.5rem]">
              We live in the age where creativity is the backbone of every
              business. Prioritizing creative work means dedicating less time to
              researching and learning new technologies and keeping up with the
              latest trends. We provide our services to be a complete marketing
              and creative solution tailored to your business.
            </p>
          </div>
        </section>
      </div>
      <div className="container mx-auto px-4 py-12 space-y-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First Row */}
          <motion.div
            className="col-span-12 md:col-span-4 border-2 rounded-lg shadow-md bg-white p-8 space-y-4 hover:shadow-xl hover:border-2 hover:border-primery duration-300 transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" inline-block bg-[#015B5B1A] rounded-lg p-2 w-12 h-12">
              <img
                src={servicesData[0].icon}
                className="w-full h-full object-fill"
              />
            </div>
            <h2 className="font-heading font-semibold text-lg lg:text-2xl xl:text-2xl text-text-black">
              {servicesData[0].title}
            </h2>
            <p className="font-text text-sm xl:text-base lg:text-base text-[#8987A1]">
              {servicesData[0].description}
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4 border-2 rounded-lg shadow-md bg-white p-8 space-y-4 hover:shadow-xl hover:border-2 hover:border-primery duration-300 transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className=" inline-block bg-[#015B5B1A] rounded-lg p-2 w-12 h-12">
              <img
                src={servicesData[1].icon}
                className="w-full h-full object-fill"
              />
            </div>
            <h2 className="font-heading font-semibold text-lg lg:text-2xl xl:text-2xl text-text-black">
              {servicesData[1].title}
            </h2>
            <p className="font-text text-sm xl:text-base lg:text-base text-[#8987A1]">
              {servicesData[1].description}
            </p>
          </motion.div>
          <motion.div
            className="col-span-12 md:col-span-4 row-span-2 border-2 rounded-lg shadow-md bg-white p-8 space-y-4 hover:shadow-xl hover:border-2 hover:border-primery duration-300 transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className=" inline-block bg-[#015B5B1A] rounded-lg p-2 w-12 h-12">
              <img
                src={servicesData[2].icon}
                className="w-full h-full object-fill"
              />
            </div>
            <h2 className="font-heading font-semibold text-lg lg:text-2xl xl:text-2xl text-text-black">
              {servicesData[2].title}
            </h2>
            <p className="font-text text-sm xl:text-base lg:text-base text-[#8987A1]">
              {servicesData[2].description}
            </p>
            <img
              src={servicesData[2].image}
              alt={servicesData[2].title}
              className=" rounded-xl pt-4 object-cover"
            />
          </motion.div>

          {/* Second Row */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {servicesData.slice(3, 7).map((service, idx) => (
              <motion.div
                key={service.id}
                className="border-2 rounded-lg shadow-md bg-white p-8 xl:flex lg:flex block w-full gap-4 xl:space-y-0 lg:space-y-0 space-y-8 hover:shadow-xl hover:border-2 hover:border-primery duration-300 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="xl:w-3/5 lg:w-3/5 w-full space-y-6">
                  <div className=" inline-block bg-[#015B5B1A] rounded-lg p-2 w-12 h-12">
                    <img
                      src={servicesData[3].icon}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <h2 className="font-heading font-semibold text-lg lg:text-2xl xl:text-2xl text-text-black">
                    {service.title}
                  </h2>
                  <p className="font-text text-sm xl:text-base lg:text-base text-[#8987A1]">
                    {service.description}
                  </p>
                </div>
                <div className="xl:w-2/5 lg:w-2/5  w-full flex items-center justify-center">
                  <div className="w-full h-[16rem]">
                    <img
                      src={servicesData[3].image}
                      alt={servicesData[3].title}
                      className=" rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <button
            className="text-[#595959] text-base font-medium hover:text-primery duration-300 transition-all flex items-center justify-center gap-2"
            onClick={handleBack}
          >
            <ChevronLeft size={20} />
            <div className="">
              <p>Prev page</p>
            </div>{" "}
          </button>
          <button
            className="text-[#595959] text-base font-medium hover:text-primery duration-300 transition-all flex items-center justify-center gap-2"
            onClick={handleNext}
          >
            <div className="">
              <p>Next page</p>
            </div>{" "}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreativeServices;
