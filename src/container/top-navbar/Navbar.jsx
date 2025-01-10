import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-top-nav.png";
import logoBlack from "../../assets/logo-black.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondary, setIsSecondary] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  // Handle intersection observer
  useEffect(() => {
    const banner = document.querySelector("#banner");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSecondary(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (banner) {
      observer.observe(banner);
    }

    return () => {
      if (banner) {
        observer.unobserve(banner);
      }
    };
  }, []);

  const bgClass = isSecondary
    ? "bg-[#E8F4FF] text-text-black"
    : "bg-white/35 backdrop-blur-lg text-white";

  const hambargerColor = isSecondary ? "text-text-black" : "text-white/70";  

  const logoSrc = isSecondary ? logoBlack : logo;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300   ${
        isMenuOpen ? "bg-secondry shadow-md" : bgClass
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="lg:w-[15rem] md:w-[12rem] w-[7.5rem]">
            <img
              src={logoSrc}
              className="w-full h-full object-fill duration-300 transition-all"
            />
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-text">
          <a
            href="#home"
            className=" md:text-xs lg:text-sm hover:text-primery duration-300 transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className=" md:text-xs lg:text-sm hover:text-primery duration-300 transition-all"
          >
            About Us
          </a>
          <a
            href="#contact"
            className=" md:text-xs lg:text-sm hover:text-primery duration-300 transition-all"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className=" md:text-xs lg:text-sm hover:text-primery duration-300 transition-all"
          >
            Services
          </a>
        </nav>
        <nav className="hidden md:block">
          {" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-[#2F6F6F] text-white font-text text-xs px-4 py-2 lg:text-sm  lg:px-6 lg:py-3 rounded-md shadow-md"
          >
            Free Consultant
          </motion.button>
        </nav>

        {/* Tablet & Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isMenuOpen ? "text-text-black/70" : hambargerColor}`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Side Drawer */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-full h-full bg-secondry shadow-lg z-40 p-6 flex flex-col gap-6"
        >
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-[10rem]">
              <img
                src={logoBlack}
                className="w-full h-full object-fill duration-300 transition-all"
              />
            </div>
          </motion.div>
          <a
            href="#home"
            className="text-sm text-gray-700 hover:text-[#2F6F6F] font-medium dont-text duration-300 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm text-gray-700 hover:text-[#2F6F6F] font-medium dont-text duration-300 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-700 hover:text-[#2F6F6F] font-medium dont-text duration-300 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="text-sm text-gray-700 hover:text-[#2F6F6F] font-medium dont-text duration-300 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <div className="">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#2F6F6F] font-text text-xs text-white px-4 py-2 rounded-md shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultant
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
