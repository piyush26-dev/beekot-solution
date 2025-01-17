import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      {/* Invisible element at the top to scroll to */}
      <div ref={topRef} id="top-scroll"></div>
      {children}
    </>
  );
};

export default ScrollToTop;
