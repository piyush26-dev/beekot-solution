import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialsCards from "../../assets/testimonials-cards.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UserImage from "../../assets/user-profile.png";
import QuotationIcon from "../../assets/quotation.png";
const testimonials = [
  {
    id: 1,
    userImg: UserImage, // Replace with actual user image
    name: "Santosh B.",
    title: "Business Man",
    rating: 5,
    review:
      "One of the things I appreciate most about this company is their dedication to understanding their clients' needs. They took the time to listen to my concerns and offered customized solutions that were tailored to my specific needs.Their attention to detail and willingness to go the extra mile truly set them apart. They were able to seamlessly integrate their services with my existing systems.",
  },
  {
    id: 2,
    userImg: UserImage, // Replace with actual user image
    name: "Jane Smith",
    title: "Business Owner",
    rating: 4,
    review:
      "Great experience overall. The team was very helpful and supportive.",
  },
  {
    id: 3,
    userImg: UserImage, // Replace with actual user image
    name: "Alice Brown",
    title: "Entrepreneur",
    rating: 5,
    review:
      "Amazing quality and attention to detail. Will definitely use again!",
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="w-full lg:flex block gap-4 items-center">
          <div className="w-full lg:w-1/2 space-y-4 md:p-12 pb-6">
            <div className="w-full">
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-semibold text-black-heading md:tracking-wide md:leading-relaxed md:border-none md:pb-0  border-b-4 border-black/35 pb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Feedback About Their Experience With Us
              </motion.h1>
              <div className="md:block hidden border-b-4 border-black/35  mr-[3.5rem]"></div>
            </div>
            <p className="font-text  text-xs md:text-lg  max-w-5xl">
              Read testimonials from our satisfied clients. See how our cleaning
              services have made a difference in their lives and homes
            </p>
            <div className="hidden lg:flex items-center gap-4 pt-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="border border-[#2F6F6F] font-text text-sm text-[#2F6F6F] px-2 py-2 rounded-md shadow-md flex items-center gap-4"
                onClick={handlePrev}
              >
                <ArrowLeft className="text-[#2F6F6F]" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="border border-[#2F6F6F] bg-[#2F6F6F] font-text text-sm text-white px-2 py-2 rounded-md shadow-md flex items-center gap-4"
                onClick={handleNext}
              >
                <ArrowRight className="text-white" />
              </motion.button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-4 relative">
            <motion.img
              src={TestimonialsCards}
              alt="Testimonials Cards"
              className="w-full h-auto rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <div className="absolute lg:top-[-0.7rem] md:top-[1rem] sm:top-[2rem] top-[-1.3rem] flex flex-col justify-center p-6">
              <div className="flex p-2 lg:p-4 md:p-4">
                <div className="flex items-center w-3/5">
                  <div className="rounded-xl h-[6rem] w-[4rem] lg:h-[13rem] lg:w-[9rem] md:h-[15rem] md:w-[11rem] xl:h-[15rem] xl:w-[11rem]">
                    <img
                      src={testimonials[currentIndex].userImg}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:space-y-2 md:space-y-4 xl:space-y-4">
                  <div className="w-full relative">
                    <div className=" md::space-y-2 lg:space-y-0 xl:space-y-2">
                      <h2 className="font-heading text-sm md:text-base font-semibold text-black-heading">
                        {testimonials[currentIndex].name}
                      </h2>
                      <h2 className="font-heading text-xs md:text-sm font-normal text-[#666666]">
                        {testimonials[currentIndex].title}
                      </h2>
                      <div className="flex items-center gap-1 md:mt-2">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, index) => (
                            <span key={index} className="text-[#FF9800]">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div className=" absolute w-[2rem] md:w-[[5rem] lg:w-[3rem] xl:w-[5rem] top-1 right-0 md:right-[2.5rem]">
                      <img src={QuotationIcon} alt="" />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="font-text text-xs xl:text-sm lg:text-xs md:text-sm  lg:font-medium  xl:font-semibold md:font-semibold">
                      {window.innerWidth < 768 &&
                      testimonials[currentIndex].review.length > 50
                        ? `${testimonials[currentIndex].review.substring(
                            0,
                            50
                          )}...`
                        : testimonials[currentIndex].review}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center justify-center gap-4 pt-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="border border-[#2F6F6F] font-text text-sm text-[#2F6F6F] px-2 py-2 rounded-md shadow-md flex items-center gap-4"
                onClick={handlePrev}
              >
                <ArrowLeft className="text-[#2F6F6F]" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="border border-[#2F6F6F] bg-[#2F6F6F] font-text text-sm text-white px-2 py-2 rounded-md shadow-md flex items-center gap-4"
                onClick={handleNext}
              >
                <ArrowRight className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
