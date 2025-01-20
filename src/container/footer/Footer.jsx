import { motion } from "framer-motion";
import Logo from "../../assets/footer-logo.png";
import { newsletterValidation } from "../../Utils/validation";
import { useState } from "react";

const Footer = () => {

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
        const { errors } = newsletterValidation(newData);
        setErrorMessages({
          ...errorMessages,
          ...errors,
        });
      };
    
      const handleSubmit = async (e) => {
        debugger
        e.preventDefault();
        const { errors, isValid } = newsletterValidation(userDetails);
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
    <motion.footer
      className="bg-[#111D15] text-white pt-16 lg:pt-[8rem] pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-start md:pb-[1rem]  lg:pb-[3rem]">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 space-y-6 pb-4">
            <img
              src={Logo}
              alt="Beekot Solutions Logo"
              className="w-[15rem] md:w-[18rem]"
            />
            <p className="font-text text-xs md:text-base  text-[#B8C1BB] leading-relaxed font-normal md:w-[23rem] lg:w-[20rem] xl:w-[23rem] md:pb-4">
              Stay updated with our latest service updates, and helpful articles
              on maintaining a website.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-wrap gap-8 w-full lg:w-2/3 justify-between font-text">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Know More</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#B8C1BB] hover:text-[#2F6F6F] duration-300 transition-all"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="w-full sm:w-auto space-y-4">
              <h3 className="font-semibold text-lg">Newsletter</h3>
              <form className="flex flex-col  gap-6">
                <div className="w-full flex flex-col gap-1">
                  <input
                    type="text"
                    className="md:w-[20rem] w-full rounded-lg px-4 py-2 bg-transparent border border-[#B8C1BB] text-[#B8C1BB] text-sm outline-none appearance-none focus:outline-none sm:w-auto "
                    placeholder="Email Goes here"
                    name="email"
                    value={userDetails?.email}
                    onChange={handleChange}
                  />
                  {errorMessages?.email && (
                    <span className="font-text text-xs label-text-alt text-white/70">
                      {errorMessages?.email}
                    </span>
                  )}
                </div>

                <div className="">
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.1 }}
                    disabled={loading}
                    className={`bg-[#2F6F6F] font-text text-sm text-white px-6 py-3 rounded-md shadow-md ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5"
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
                      "Send"
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <motion.div
          className="border-t border-[#B8C1BB] mt-8 pt-6 text-sm text-[#B8C1BB]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center md:text-left">
            <p className="font-text text-xs md:text-base text-[#B8C1BB] leading-relaxed font-normal">
              Copyright ©2025 All Rights Reserved By{" "}
              <span
                className="text-primery cursor-pointer font-semibold"
                onClick={() =>
                  window.open("https://beekotsolution.com/", "_blank")
                }
              >
                Beekot Solution
              </span>
              .
            </p>
            {/* <p className="font-text text-xs md:text-base text-[#B8C1BB] leading-relaxed font-normal">
              Design By{" "}
              <span
                className="text-primery cursor-pointer font-semibold"
                onClick={() => window.open("https://digiflex.ai/", "_blank")}
              >
                Digiflex.ai
              </span>
              , A Website designing company.
            </p> */}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
