// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-top-nav.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/35 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="md:w-[15rem] w-[7.5rem]">
            <img src={logo} className="w-full h-full object-fill" />
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-text">
          <a
            href="#home"
            className="text-white text-sm hover:text-primery duration-300 transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-sm hover:text-primery duration-300 transition-all"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-white text-sm hover:text-primery duration-300 transition-all"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="text-white text-sm hover:text-primery duration-300 transition-all"
          >
            Services
          </a>
        </nav>
        <nav className="hidden md:flex gap-8 items-center">
          {" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-[#2F6F6F] font-text text-sm text-white px-6 py-3 rounded-md shadow-md"
          >
            Free Consultant
          </motion.button>
        </nav>

        {/* Tablet & Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Side Drawer */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6"
        >
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
