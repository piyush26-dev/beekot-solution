import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContactUSIconOne from "../../assets/map-oin.png";
import ContactUSIconTwo from "../../assets/ringer-volume.png";
import ContactUSIconThree from "../../assets/pocket-watch.png";
import ContactUSIconFour from "../../assets/envelope.png";
import { inquiriesValidation } from "../../Utils/validation";

const contactUsData = [
  {
    id: 1,
    Icon: ContactUSIconOne,
    title: "Our Address",
    contant: "Aone Capital Third Floor Apte Road Shivajinagar Pune 411004",
    background: "#E6E8FB",
  },
  {
    id: 2,
    Icon: ContactUSIconTwo,
    title: "Our Phone",
    contant: "Sales:   +91 9860 888 209",
    contantTwo: "Admin: +91 9860 888 902",
    background: "#FFEBE8",
  },
  {
    id: 3,
    Icon: ContactUSIconThree,
    title: "Work hours",
    contant: "Everyday 9:00 to 7:00",
    background: "#EFE2FC",
  },
  {
    id: 4,
    Icon: ContactUSIconFour,
    title: "Write email",
    contant: "info@beekotsolution.com",
    background: "#CBF2C6",
  },
];

const ContactUsSectionTwo = () => {
  const initialState = {
    full_name: "",
    email: "",
    phone_no: "",
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

  const handlePhoneChange = (value, country) => {
    const phoneWithoutCountryCode = value
      .replace(`+${country.dialCode}`, "")
      .trim();
    const e = {
      target: {
        value: phoneWithoutCountryCode,
        name: "phone_no",
      },
    };
    handleChange(e);
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
    <section className="relative bg-input-bg/35 md:py-16 lg:py-0 xl:py-0 py-8">
      <div className="relative container mx-auto px-6 z-10  grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-12">
        {/* Left Section: Contact Form */}
        <motion.div
          className="bg-white text-black rounded-2xl shadow-lg p-6 lg:p-12 lg:relative lg:top-[-15rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-2xl font-semibold mb-6 text-heading-color">
            Leave Your Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="w-full">
                {" "}
                <label className="w-full space-y-4">
                  <div className="label">
                    <span className="text-sm font-semibold font-text text-text-black">
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    name="full_name"
                    value={userDetails?.full_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-[1.3rem] py-4 border border-text-black/20 bg-input-bg/35 rounded-lg focus:outline-none text-sm font-normal text-text-black"
                  />
                </label>
                {errorMessages?.full_name && (
                  <span className="font-text text-xs label-text-alt text-red-500">
                    {errorMessages?.full_name}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label className="w-full space-y-4">
                  <div className="label">
                    <span className="text-sm font-semibold font-text text-text-black">
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={userDetails?.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-[1.3rem] py-4 border border-text-black/20 bg-input-bg/35 rounded-lg focus:outline-none text-sm font-normal text-text-black"
                  />
                </label>
                {errorMessages?.email && (
                  <span className="font-text text-xs label-text-alt text-red-500">
                    {errorMessages?.email}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full ">
              <label className="w-full space-y-4">
                <div className="label">
                  <span className="text-sm font-semibold font-text text-text-black">
                    Phone Number
                  </span>
                </div>
                <PhoneInput
                  country={"in"}
                  defaultCountry="in"
                  value={userDetails.phone_no}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    border: "none",
                    width: "100%",
                    borderBottom: "none",
                    borderRadius: "0",
                    backgroundColor: "transparent",
                    fontSize: "0.875rem",
                    color: "#0F0E0E",
                  }}
                  buttonClass="flag-dropdown phone-dropdown"
                  className="w-full px-4 py-2 border border-text-black/20 bg-input-bg/35 rounded-lg focus:outline-none text-sm font-normal text-text-black"
                  inputClass="w-full bg-transparent text-base border-none appearance-none outline-none"
                />
              </label>
              {errorMessages?.phone_no && (
                <span className="font-text text-xs label-text-alt text-red-500">
                  {errorMessages?.phone_no}
                </span>
              )}
            </div>
            <div className="w-full">
              <label className="space-y-4">
                <div className="label">
                  <span className="text-sm font-semibold font-text text-text-black">
                    Message
                  </span>
                </div>
                <div className="w-full">
                  <textarea
                    rows="4"
                    name="message"
                    value={userDetails?.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-[1.3rem] py-4 border border-text-black/20 bg-input-bg/35 rounded-lg focus:outline-none text-sm font-normal text-text-black"
                  ></textarea>
                </div>
              </label>
              {errorMessages?.message && (
                <span className="font-text text-xs label-text-alt text-red-500">
                  {errorMessages?.message}
                </span>
              )}
            </div>

            {/* <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agree"
                className="focus:ring-2 focus:ring-teal-500"
              />
              <label
                htmlFor="agree"
                className="text-xs font-text font-medium text-text-black/70"
              >
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div> */}

            <div className="">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                disabled={loading}
                className={`${
                  loading
                    ? "bg-[#2F6F6F]/70 text-white/70"
                    : "bg-[#2F6F6F] text-white"
                }  font-text text-xs px-4 py-2 lg:text-sm  lg:px-6 lg:py-3 rounded-md shadow-md`}
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
        </motion.div>

        {/* Right Section: Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-heading text-4xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-500 md:tracking-wide md:leading-relaxed md:border-none md:pb-0 border-b-4 border-black/35 pb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Don't hesitate to contact us
          </motion.h1>
          <div className="w-full">
            <p className="font-text text-xs xl:text-base  text-[#535353] leading-relaxed font-normal">
              Our team is ready to assist you with any questions or inquiries.
            </p>
            <p className="font-text text-xs xl:text-base  text-[#535353] leading-relaxed font-normal  md:pb-4">
              <strong>Let’s start the conversation!</strong>
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {contactUsData.map((data, index) => (
              <motion.div
                key={index}
                className="shadow-lg flex items-center gap-4 rounded-xl bg-white text-text-black p-4 w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  style={{ background: data.background }}
                  className="rounded-full flex items-center justify-center w-[3.5rem] h-[3.5rem] min-w-[3.5rem] min-h-[3.5rem] p-3"
                >
                  <img src={data.Icon} className="object-contain" alt="Icon" />
                </motion.div>
                <div>
                  <h2 className="font-heading text-sm md:text-base font-semibold text-black-heading">
                    {data.title}
                  </h2>
                  <h2 className="font-heading text-xs md:text-sm font-normal text-[#666666]">
                    {data.title === "Our Phone" ? (
                      // For phone numbers, wrap them with a tel: link
                      <>
                        <a
                          href={`tel:${data.contant.split(" ")[1]}`}
                          className="text-[#666666] hover:text-blue-500 duration-300 transition-all"
                        >
                          {data.contant}
                        </a>
                        {data.contantTwo && (
                          <>
                            <br />
                            <a
                              href={`tel:${data.contantTwo.split(" ")[1]}`}
                              className="text-[#666666] hover:text-blue-500 duration-300 transition-all"
                            >
                              {data.contantTwo}
                            </a>
                          </>
                        )}
                      </>
                    ) : data.title === "Write email" ? (
                      // For email, wrap it with a mailto: link
                      <a
                        href={`mailto:${data.contant}`}
                        className="text-[#666666] hover:text-blue-500 duration-300 transition-all"
                      >
                        {data.contant}
                      </a>
                    ) : (
                      data.contant
                    )}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSectionTwo;
