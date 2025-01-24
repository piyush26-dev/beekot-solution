import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialsCards from "../../assets/testimonials-cards.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UserImage from "../../assets/user-profile.png";
import QuotationIcon from "../../assets/quotation.png";
const testimonials = [
  {
    id: 1,
    userImg: UserImage, // Replace with actual user image
    name: "John Doe",
    title: "Software Engineer",
    rating: 5,
    review:
      "This company exceeded my expectations! Their team delivered exceptional results within the given time frame. Highly professional and easy to work with. I particularly appreciated their attention to detail and the way they communicated throughout the entire process. From the initial consultation to the final delivery, everything was seamless. Their expertise helped us achieve our goals faster than we anticipated.",
  },
  {
    id: 2,
    userImg: UserImage, // Replace with actual user image
    name: "Lily Smith",
    title: "Marketing Specialist",
    rating: 4,
    review:
      "I am impressed by their professionalism and attention to detail. The team was always supportive and delivered great results. Their marketing strategies were innovative and tailored to my needs, which significantly improved my brand’s visibility. They were always available to address my questions and went the extra mile to ensure everything was perfect. I would definitely recommend them to anyone looking to elevate their business.",
  },
  {
    id: 3,
    userImg: UserImage, // Replace with actual user image
    name: "James Brown",
    title: "Entrepreneur",
    rating: 5,
    review:
      "Their solutions were tailored perfectly to our needs. It was a pleasure working with such a dedicated team. Highly recommended! Their ability to understand the complexities of my business and suggest actionable solutions made a huge difference. They didn’t just offer generic advice, but rather customized recommendations that added real value to our operations. I look forward to working with them again in the future.",
  },
  {
    id: 4,
    userImg: UserImage, // Replace with actual user image
    name: "Emma Wilson",
    title: "Business Owner",
    rating: 4,
    review:
      "Excellent service with a strong focus on customer satisfaction. The team was approachable, responsive, and helpful throughout the process. They took the time to understand my business goals and delivered results that exceeded my expectations. Their collaborative approach made the entire experience enjoyable, and I felt like my success was just as important to them as it was to me.",
  },
  {
    id: 5,
    userImg: UserImage, // Replace with actual user image
    name: "Michael Johnson",
    title: "Freelancer",
    rating: 5,
    review:
      "The experience was truly amazing. The team showed great dedication and expertise. I’ll definitely collaborate with them again for future projects. From project planning to execution, they kept me informed and involved at every step. Their transparency and commitment to quality are unmatched. Working with them felt less like a transaction and more like a partnership, which is something I truly value.",
  },
  {
    id: 6,
    userImg: UserImage, // Replace with actual user image
    name: "Sophia Davis",
    title: "Graphic Designer",
    rating: 4,
    review:
      "I appreciated the creativity and innovation they brought to the table. Their ideas were fresh and truly made a difference. They not only delivered on time but also ensured that every element aligned perfectly with my vision. Their ability to listen and adapt made the entire process smooth and hassle-free. I am thrilled with the final results and look forward to working with them again in the future.",
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
          <div className="w-full lg:w-1/2  ">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 relative w-full"
              >
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
              </motion.div>
            </AnimatePresence>
            

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
