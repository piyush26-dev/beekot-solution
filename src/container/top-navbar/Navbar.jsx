import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/header-logo-two.png";
import logoBlack from "../../assets/logo-black.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondary, setIsSecondary] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Dropdown items
  const servicesMenu = [
    { name: "Startup Services", route: "/startup-services" },
    { name: "Web / Mobility Development", route: "/web-development" },
    { name: "Creative Services", route: "/creative-services" },
    { name: "Digital Marketing", route: "/digital-marketing" },
    { name: "Consulting Services", route: "/consulting-services" },
    { name: "Managed Industries", route: "/managed-industries" },
    { name: "Engagement Model", route: "/engagement-model" },
  ];

  // Framer Motion dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

   const handleItemClick = (route) => {
     setIsServicesOpen(false); // Close dropdown
     navigate(route); // Navigate to route
   };

  // const bgClass = isSecondary
  //   ? "bg-[#E8F4FF] text-text-black"
  //   : "bg-white/35 backdrop-blur-lg text-white";

    const bgClass = isSecondary
      ? "bg-[#E8F4FF] text-text-black"
      : "bg-secondry backdrop-blur-lg ";

  // const hambargerColor = isSecondary ? "text-text-black" : "text-white/70";

    const hambargerColor = isSecondary ? "text-text-black" : "text-text-black";

  const logoSrc = isSecondary ? logoBlack : logo;

  const handleConsultant = () => {
    navigate("/contact");
  };

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
          {["Home", "About", "Services", "Contact"].map((item, idx) => {
            // Determine if the Services dropdown is active based on the current location
            const isServicesActive = servicesMenu.some(
              (menuItem) => window.location.pathname === menuItem.route
            );

            return (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() =>
                  item === "Services" && setIsServicesOpen(true)
                }
                onMouseLeave={() =>
                  item === "Services" && setIsServicesOpen(false)
                }
              >
                {item === "Services" ? (
                  <button
                    className={`md:text-xs lg:text-sm transition-all duration-300 ${
                      isServicesActive
                        ? "text-primery font-bold border-b-2 border-primery"
                        : "hover:text-primery"
                    } flex items-center gap-1`}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                  >
                    {item}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `md:text-xs lg:text-sm transition-all duration-300 ${
                        isActive
                          ? "text-primery font-bold border-b-2 border-primery"
                          : "hover:text-primery"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                )}

                {/* Dropdown for Services */}
                {item === "Services" && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul
                        className="absolute top-full left-0 mt-2 py-4 bg-secondry shadow-lg rounded-lg z-50 w-56 border border-gray-200"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                      >
                        {servicesMenu.map((menuItem, menuIdx) => (
                          <li key={menuIdx}>
                            <NavLink
                              to={menuItem.route}
                              className={({ isActive }) =>
                                `font-text block px-4 py-2 text-sm hover:bg-primery hover:text-white transition-all duration-200 ${
                                  isActive
                                    ? "text-primery font-bold border-l-2 border-primery"
                                    : "text-gray-700"
                                }`
                              }
                              onClick={() => {
                                setIsServicesOpen(false); // Close dropdown on click
                              }}
                            >
                              {menuItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <nav className="hidden md:block">
          {" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-[#2F6F6F] text-white font-text text-xs px-4 py-2 lg:text-sm  lg:px-6 lg:py-3 rounded-md shadow-md"
            onClick={handleConsultant}
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
          {/* Mobile Menu */}
          <nav className="font-text text-gray-700 flex flex-col gap-6">
            {["Home", "About", "Services", "Contact"].map((item, idx) => (
              <div key={idx} className="relative">
                {item === "Services" ? (
                  <>
                    <button
                      className={`font-medium transition-all text-sm duration-300 flex items-center gap-1 ${
                        isServicesOpen
                          ? "text-primery font-bold"
                          : "hover:text-primery"
                      }`}
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                    >
                      {item}
                      <ChevronDown size={16} />
                    </button>

                    {/* Dropdown for Services */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.ul
                          className="mt-2 pl-4 bg-secondry shadow-lg rounded-lg z-50 w-full border border-gray-200 flex flex-col gap-2"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                        >
                          {servicesMenu.map((menuItem, menuIdx) => (
                            <li key={menuIdx}>
                              <NavLink
                                to={menuItem.route}
                                className={({ isActive }) =>
                                  `font-text block px-4 py-2 text-sm hover:bg-primery hover:text-white transition-all duration-200 ${
                                    isActive
                                      ? "text-primery font-bold border-l-2 border-primery"
                                      : "text-gray-700"
                                  }`
                                }
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {menuItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-medium transition-all text-sm duration-300 relative inline-block ${
                        isActive
                          ? "text-primery font-bold"
                          : "hover:text-primery"
                      }`
                    }
                  >
                    {item}
                    {({ isActive }) => (
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-primery transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      ></span>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#2F6F6F] font-text text-xs text-white px-4 py-2 rounded-md shadow-md"
              onClick={() => {
                handleConsultant();
                setIsMenuOpen(false);
              }}
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
