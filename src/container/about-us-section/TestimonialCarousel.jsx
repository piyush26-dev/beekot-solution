import { useState } from "react";
import { motion } from "framer-motion";
import profilePicOne from "../../assets/profile-2.jpg"
import profilePicTwo from "../../assets/profile-3.jpg"
import profilePicThree from "../../assets/profile-4.jpg"
import profilePicFour from "../../assets/profile-5.jpg"
import profilePicFive from "../../assets/profile-6.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialData = [
  {
    id: 1,
    profile: profilePicOne,
    name: "David Cooper",
    contant:
      "We trust Beekot for their innovative solutions and ongoing support. They’ve been instrumental in our growth.",
  },
  {
    id: 2,
    profile: profilePicTwo,
    name: "Sarah Mitchell",
    contant:
      "Beekot’s expertise brought our vision to life. Their dedication and attention to detail were outstanding!",
  },
  {
    id: 3,
    profile: profilePicThree,
    name: "Rachel Adams",
    contant:
      "The Beekot team provided exceptional service and support. Their strategies delivered immediate results for our business.",
  },
  {
    id: 4,
    profile: profilePicFour,
    name: "Jonathan Hayes",
    contant:
      "Beekot transformed our operations with innovative solutions. Their team's professionalism and commitment were truly remarkable.",
  },
  {
    id: 5,
    profile: profilePicFive,
    name: "Emily Carter",
    contant:
      "Partnering with Beekot was a game-changer. They delivered tailored solutions that exceeded our expectations!",
  },
];

const TestimonialCarousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-87%", scale: 0.7, zIndex: 3 },
    left: { x: "-149%", scale: 0.5, zIndex: 2 },
    right: { x: "149%", scale: 0.5, zIndex: 1 },
    right1: { x: "87%", scale: 0.7, zIndex: 3 },
  };
  return (
    // <div className="flex items-center flex-col justify-center w-full">
    //   {TestimonialData.map((data, index) => (
    //     <motion.div
    //       key={index}
    //       className="rounded-2xl shadow-2xl bg-white text-center flex flex-col  items-center p-4 xl:p-8 lg:p-8 md:p-6 border space-y-6"
    //       initial="center"
    //       animate={positions[positionIndexes[index]]}
    //       variants={imageVariants}
    //       transition={{ duration: 0.5 }}
    //       style={{ width: "32%", position: "absolute" }}
    //     >
    //       <div className="w-14 h-14 min-w-14 min-h-14 md:w-16 md:h-16 md:min-w-16 md:min-h-16 lg:w-20 lg:h-20 lg:min-w-20 lg:min-h-20 xl:w-20 xl:h-20 xl:min-w-20 xl:min-h-20 border-4 rounded-full border-button-text">
    //         <img
    //           src={data.profile}
    //           alt={data.name}
    //           className="w-full h-full object-fill  rounded-full"
    //         />
    //       </div>
    //       <div className="w-full">
    //         <h2 className="font-heading text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-text-black">
    //           {data.name}
    //         </h2>
    //       </div>
    //       <div className="w-full">
    //         <p className="font-text text-sm md:text-base  lg:text-lg xl:text-lg font-medium text-[#575757]">
    //           {data.contant}
    //         </p>
    //       </div>
    //     </motion.div>
    //   ))}
    //   <div className="flex flex-row gap-3 mt-[32rem]">
    //     <button
    //       className="text-text-black bg-[#E8E8E8] rounded-full  p-2 hover:bg-button-text hover:text-white duration-300 transition-all"
    //       onClick={handleBack}
    //     >
    //       <ChevronLeft />
    //     </button>
    //     <button
    //       className="text-text-black bg-[#E8E8E8] rounded-full  p-2 hover:bg-button-text hover:text-white duration-300 transition-all"
    //       onClick={handleNext}
    //     >
    //       <ChevronRight />
    //     </button>
    //   </div>
    // </div>
    <div className="flex items-center flex-col justify-center w-full">
      <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[350px] md:h-[450px]  lg:h-[500px] xl:h-[450px] overflow-hidden">
        {TestimonialData.map((data, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-2xl bg-white text-center flex flex-col items-center p-4 xl:p-8 lg:p-8 md:p-6 border space-y-6"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "90%", maxWidth: "400px", position: "absolute" }}
          >
            <div className="w-14 h-14 min-w-14 min-h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 rounded-full border-button-text">
              <img
                src={data.profile}
                alt={data.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full">
              <h2 className="font-heading text-lg md:text-xl font-bold text-text-black">
                {data.name}
              </h2>
            </div>
            <div className="w-full">
              <p className="font-text text-sm md:text-base font-medium text-[#575757]">
                {data.contant}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row gap-3 mt-8">
        <button
          className="text-text-black bg-[#E8E8E8] rounded-full p-2 hover:bg-button-text hover:text-white duration-300 transition-all"
          onClick={handleBack}
        >
          <ChevronLeft />
        </button>
        <button
          className="text-text-black bg-[#E8E8E8] rounded-full p-2 hover:bg-button-text hover:text-white duration-300 transition-all"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
