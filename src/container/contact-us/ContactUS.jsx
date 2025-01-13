import { useState } from "react";
import { motion } from "framer-motion";
import ContactUSIconOne from "../../assets/contact-us-1.png";
import ContactUSIconTwo from "../../assets/contact-us-2.png";
import ContactUSIconThree from "../../assets/contact-us-3.png";
import { inquiriesValidation } from "../../Utils/validation";

const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length === 10) {
    return `+91 ${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
      4,
      7
    )} ${phoneNumber.slice(7)}`;
  } else if (phoneNumber.length === 12) {
    return `+${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
      2,
      6
    )} ${phoneNumber.slice(6, 9)} ${phoneNumber.slice(9)}`;
  }
  return phoneNumber; // Agar length match na kare to original number return kare
};

const contactUsData = [
  {
    id: 1,
    Icon: ContactUSIconOne,
    title: "Call Us",
    contant: "9160888209",
  },
  {
    id: 2,
    Icon: ContactUSIconTwo,
    title: "Email Now",
    contant: "info@beekotsolution.com",
  },
  {
    id: 3,
    Icon: ContactUSIconThree,
    title: "Address",
    contant: "GLOBAL BUSINESS HUB EON Free Zone, Kharadi, Pune, 411014 MH.",
  },
];

const ContactUS = () => {
  const initialState = {
    full_name: "",
    email: "",
    message: "",
  };

  const [userDetails, setUserDetails] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
    const { errors } = inquiriesValidation(newData);
    setErrorMessages({
      ...errorMessages,
      ...errors,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, isValid } = inquiriesValidation(userDetails);
    setErrorMessages({
      ...errorMessages,
      ...errors,
    });
    if (!isValid) return;
    setLoading(true);
    //  try {
    //    setLoading(true);
    //    const response = await sendInquireService(userDetails);
    //    if (response?.status === 201) {
    //      toast.success(response?.data?.message);
    //      setUserDetails(initialState);
    //    } else {
    //      toast.error(response?.data?.message || "Somthing went wrong");
    //    }
    //  } catch (error) {
    //    console.log("error", error);
    //    toast.error("An error occurred. Please try again.");
    //  } finally {
    //    setLoading(false);
    //  }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="w-full lg:flex block gap-4 items-center">
          <div className="w-full lg:w-1/2 space-y-4 lg:p-0 pb-6">
            <div className="w-full">
              <motion.h1
                className="font-heading text-4xl md:text-5xl font-semibold text-black-heading md:tracking-wide md:leading-relaxed md:border-none md:pb-0  border-b-4 border-black/35 pb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Find us
              </motion.h1>
            </div>
            <div className="w-full space-y-4">
              {contactUsData.map((data, index) => (
                <motion.div
                  key={index}
                  className="flex  gap-4 rounded-lg bg-[#FBFBFB] text-text-black p-4 w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-button-text rounded-full flex items-center justify-center w-[2.2rem] h-[2.2rem] min-w-[2.2rem] min-h-[2.2rem]">
                    <img
                      src={data.Icon}
                      className="w-[1rem] h-[1rem] object-contain"
                      alt="Icon"
                    />
                  </div>

                  <div className="">
                    <h2 className="font-heading text-sm md:text-base font-semibold text-black-heading">
                      {data.title}
                    </h2>
                    <h2 className="font-heading text-xs md:text-sm font-normal text-[#666666]">
                      {data.title === "Call Us"
                        ? formatPhoneNumber(data.contant)
                        : data.contant}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-xl bg-button-text p-6 space-y-4 text-white">
            <p className="font-text  text-sm  font-normal ">Contact info</p>
            <h1 className="font-heading text-3xl font-semibold">
              Keep In Touch
            </h1>
            <p className="font-text  text-sm  font-normal ">
              Get a Free Consulting
            </p>
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full rounded p-4 bg-white text-text-black text-base outline-none appearance-none focus:outline-none"
                  placeholder="Name"
                  name="full_name"
                  value={userDetails?.full_name}
                  onChange={handleChange}
                />
                {errorMessages?.full_name && (
                  <span className="font-text label-text-alt text-white/70">
                    {errorMessages?.full_name}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full rounded p-4 bg-white text-text-black text-base outline-none appearance-none focus:outline-none"
                  placeholder="Email"
                  name="email"
                  value={userDetails?.email}
                  onChange={handleChange}
                />
                {errorMessages?.email && (
                  <span className="font-text label-text-alt text-white/70">
                    {errorMessages?.email}
                  </span>
                )}
              </div>
              <div className="w-full">
                <textarea
                  type="text"
                  className="w-full rounded p-4 bg-white text-text-black text-base outline-none appearance-none focus:outline-none"
                  placeholder="Message"
                  name="message"
                  value={userDetails?.message}
                  onChange={handleChange}
                />
                {errorMessages?.message && (
                  <span className="font-text label-text-alt text-white/70">
                    {errorMessages?.message}
                  </span>
                )}
              </div>
              <div className="">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  disabled={loading} // Disable button when loading
                  className={`border border-white bg-white font-text  text-text-black hover:border-[#2F6F6F] hover:text-[#2F6F6F] duration-300 transition-all px-6 py-3 rounded-md shadow-md flex items-center justify-center ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
